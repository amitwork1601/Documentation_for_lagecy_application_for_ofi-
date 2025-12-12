# CheckoutComGateway.php

**Path**: `src\Gateway\CheckoutComGateway.php`

## Summary
The `CheckoutComGateway` class is a payment gateway integration for Checkout.com that handles payment processing, payment instrument management, and subscription billing. It implements multiple gateway interfaces to support synchronous/asynchronous payments, card tokenization, and recurring subscription charges, providing functionality to authorize, capture, refund, and void payments while managing customer payment instruments (cards) through the Checkout.com API.

## Classes
- `CheckoutComGateway`

## Function Details

### `supports`

- **Parameters**: `GatewayConfigInterface $gatewayConfig`

### `getSupportedGateway`


### `getPaymentPublicConfig`

- **Parameters**: `PaymentInstrument|Payment $object, array $data = []`
- **Description**: @throws PaymentException|GatewayException
/

### `getPublicConfigForCB`

- **Parameters**: `PaymentInstrument|Payment $object, array $data = []`

### `getPublicConfigForGooglePay`

- **Parameters**: `PaymentInstrument|Payment $object, array $data = []`

### `getPublicConfigForPaypal`

- **Parameters**: `Payment $object, array $data = []`
- **Description**: @throws PaymentException
/

### `formatDataDetailsForPaymentInstrument`

- **Parameters**: `?array $data = null, ?string $ckoPaymentId = null`
- **Description**: @var Order $order */
$order = $object-&gt;getOrder();

$response = $this-&gt;getPaymentApi()-&gt;requestPayment($order);

/** @var HttpMetadata|null $httpMetadata */
$httpMetadata = $this-&gt;accessor-&gt;getValue($response, '[http_metadata]');
Assert::notNull($httpMetadata);

if (Response::HTTP_ACCEPTED !== $httpMetadata-&gt;getStatusCode()) {
return null;
}

return [
'order_id' =&gt; $this-&gt;accessor-&gt;getValue($response, '[processing][order_id]'),
'client_id' =&gt; $this-&gt;accessor-&gt;getValue($this-&gt;gatewayConfig-&gt;getConfig(), '[client_id]') ?? '',
];
}

/**
@throws CheckoutArgumentException
@throws CheckoutException
@throws InstrumentVerificationRequestRedirectionException
@throws PaymentInstrumentException|PaymentException
@throws \Exception
/
public function updatePaymentInstrument(
PaymentInstrument $paymentInstrument,
array $paymentData = [],
string $currentUrl = '',
): PaymentInstrument {
if ('checkoutcom_cb' !== $paymentInstrument-&gt;getMethod()?-&gt;getGatewayConfig()?-&gt;getFactoryName()) {
throw PaymentInstrumentException::invalidUpdatePaymentMethod($paymentInstrument-&gt;getMethod());
}

$token = $this-&gt;accessor-&gt;getValue($paymentData, '[token]');
$ckoSessionId = $this-&gt;accessor-&gt;getValue($paymentData, '[cko-session-id]');

$source = null;
if (null !== $token) {
$checkoutInstrument = $this-&gt;getPaymentInstrumentApi()
-&gt;createInstrument($token)
;

$source = $this-&gt;getPaymentInstrumentApi()
-&gt;verifyInstrument(
$checkoutInstrument['id'],
$currentUrl,
[
'type' =&gt; 'payment_instrument_verification',
'id' =&gt; $paymentInstrument-&gt;getId(),
]
)
;
} else {
if (null !== $ckoSessionId) {
$source = $this-&gt;getPaymentInstrumentApi()
-&gt;verifySourceAuthorization($ckoSessionId)
;
}
}

if (null === $source) {
throw PaymentInstrumentException::updateHasFailed();
}

$ckoPaymentId = $this-&gt;accessor-&gt;getValue($source, '[referential_payment_id]');
if (null === $ckoPaymentId) {
throw PaymentInstrumentException::updateHasFailed();
}

$paymentInstrument-&gt;setDetails(
$this-&gt;formatDataDetailsForPaymentInstrument(ckoPaymentId: $ckoPaymentId)
);

$paymentInstrument-&gt;setExpiration(
$this-&gt;formatExpirationDateForPaymentInstrument(ckoPaymentId: $ckoPaymentId)
);

return $paymentInstrument;
}

public function debitPaymentInstrument(
SubscriptionOrder|Order $subscriptionOrder,
array $requestData = [],
): PaymentInterface {
$lastPayment = $subscriptionOrder-&gt;getLastPayment(PaymentInterfaceAlias::STATE_NEW);
Assert::notNull($lastPayment);

try {
$idempotencyKey = Uuid::uuid4()-&gt;toString();
$response = $this-&gt;getPaymentApi()
-&gt;requestPayment(
$subscriptionOrder,
$idempotencyKey
)
;

/** @var HttpMetadata|null $httpMetadata */
$httpMetadata = $this-&gt;accessor-&gt;getValue($response, '[http_metadata]');
Assert::notNull($httpMetadata);

if (Response::HTTP_CREATED !== $httpMetadata-&gt;getStatusCode()) {
throw PaymentException::debitPaymentException($subscriptionOrder-&gt;getId());
}

$lastPayment-&gt;setDetails(
$this-&gt;formatPaymentDetails(
$response,
$idempotencyKey,
$lastPayment-&gt;getMethod()-&gt;getCode()
)
);

$this-&gt;paymentTransition-&gt;apply($lastPayment, PaymentTransitions::TRANSITION_PROCESS);
$this-&gt;paymentTransition-&gt;apply($lastPayment, PaymentTransitions::TRANSITION_COMPLETE);
} catch (PaymentException $e) {
$this-&gt;paymentTransition-&gt;apply($lastPayment, PaymentTransitions::TRANSITION_FAIL);
$this-&gt;logger-&gt;error($e-&gt;getMessage());
}

return $lastPayment;
}

public function getPaymentInstrumentApi(): PaymentInstrumentApi
{
return new PaymentInstrumentApi($this-&gt;clientConfig, $this-&gt;logger);
}

public function getPaymentApi(): PaymentApi
{
return new PaymentApi(
$this-&gt;clientConfig,
$this-&gt;logger,
$this-&gt;orderNumberAssigner,
$this-&gt;paymentRequestFactory,
$this-&gt;paymentLinkRequestFactory
);
}

public function getPaymentStateResolver(): CheckoutComPaymentStateResolver
{
return new CheckoutComPaymentStateResolver(
$this-&gt;paymentManager,
$this-&gt;paymentTransition,
$this-&gt;checkoutTransition,
$this-&gt;accessor,
$this-&gt;getPaymentApi()
);
}

public function setGatewayConfig(GatewayConfigInterface $gatewayConfig): void
{
$this-&gt;gatewayConfig = $gatewayConfig;
$config = $this-&gt;gatewayConfig-&gt;getConfig();
$this-&gt;clientConfig = new CheckoutComClientConfig(
environment: $config['checkout_environment'],
clientId: $config['checkout_client_id'],
clientSecret: $config['checkout_client_secret'],
publicKey: $config['checkout_public_key'],
secretKey: $config['checkout_secret_key'],
webhookAuthHeaderKey: $config['checkout_webhook_auth_header_key'],
webhookAuthSignatureKey: $config['checkout_webhook_signature_key'],
successUrl: $config['success_url'],
failureUrl: $config['failure_url'],
rawConfig: $config
);
}

public function formatPaymentDetails(array $data, string $idempotencyKey, string $idempotencyType): array
{
$currentRequest = $this-&gt;requestStack-&gt;getCurrentRequest();

return [
'status' =&gt; $this-&gt;accessor-&gt;getValue($data, '[status]'),
'cko-payment-id' =&gt; $this-&gt;accessor-&gt;getValue($data, '[id]'),
'reference_id' =&gt; $this-&gt;accessor-&gt;getValue($data, '[reference]'),
'origin' =&gt; (null !== $currentRequest ? $currentRequest-&gt;headers-&gt;get('origin') : null),
'cko-idempotency-key' =&gt; $idempotencyKey,
'cko-idempotency-type' =&gt; $idempotencyType,
'_gateway_response_api' =&gt; $data,
];
}

public function formatPaymentLinkDetails(array $data): array
{
return [
'status' =&gt; PaymentStatus::$PENDING,
'reference_id' =&gt; $this-&gt;accessor-&gt;getValue($data, '[reference]'),
'cko-payment-link-id' =&gt; $this-&gt;accessor-&gt;getValue($data, '[id]'),
'cko-payment-link' =&gt; $this-&gt;accessor-&gt;getValue($data, '[_links][redirect][href]'),
'cko-payment-link-status' =&gt; $this-&gt;accessor-&gt;getValue($data, '[status]'),
'cko-payment-link-expire' =&gt; $this-&gt;accessor-&gt;getValue($data, '[expires_on]'),
'_gateway_response_api' =&gt; $data,
];
}

/**
@throws PaymentInstrumentException
@throws PaymentException
/

### `formatExpirationDateForPaymentInstrument`

- **Parameters**: `?array $data = null, ?string $ckoPaymentId = null`
- **Description**: @throws PaymentInstrumentException
@throws PaymentException
/

### `getIdempotencyKey`

- **Parameters**: `PaymentInterface $payment`
- **Description**: @var Payment $payment */
$payment = $order-&gt;getLastPayment([BasePaymentInterface::STATE_CART, BasePaymentInterface::STATE_NEW]);
if (null === $payment) {
throw AsyncPaymentException::unProcessablePayment();
}

$idempotencyKey = $this-&gt;getIdempotencyKey($payment);
$checkoutToken = $this-&gt;getCheckoutToken(
$this-&gt;accessor-&gt;getValue($paymentData, '[tokenCheckout][type]'),
$this-&gt;accessor-&gt;getValue($paymentData, '[tokenCheckout][token_data]')
);

$response = $this-&gt;getPaymentApi()
-&gt;requestPayment($order, $idempotencyKey, $checkoutToken, $currentUrl)
;

/** @var HttpMetadata|null $httpMetadata */
$httpMetadata = $this-&gt;accessor-&gt;getValue($response, '[http_metadata]');
Assert::notNull($httpMetadata);

if (!\in_array($httpMetadata-&gt;getStatusCode(), [Response::HTTP_CREATED, Response::HTTP_ACCEPTED], true)) {
$errorDetails = $this-&gt;getErrorDetails($response);
throw AsyncPaymentException::apiResponseException(\sprintf('[%s] %s', $errorDetails['code'], $errorDetails['message']), $httpMetadata-&gt;getStatusCode());
}

// Save payment details
$payment-&gt;setDetails(
$this-&gt;formatPaymentDetails(
$response,
$idempotencyKey,
$payment-&gt;getMethod()-&gt;getCode()
)
);

// Mark payment as created
$this-&gt;paymentTransition-&gt;apply(
$payment,
PaymentTransitions::TRANSITION_CREATE,
);

$checkoutPaymentStatus = $this-&gt;accessor-&gt;getValue($response, '[status]');
if ($checkoutPaymentStatus === PaymentStatus::$DECLINED) {
$errorDetails = $this-&gt;getResponseCodeDetails(
$this-&gt;accessor-&gt;getValue($response, '[response_code]')
);
throw AsyncPaymentException::apiResponseException(\sprintf('[%s] %s', $errorDetails['code'], $errorDetails['message']), $httpMetadata-&gt;getStatusCode());
}

$processPaymentResponse = new ProcessPaymentResponse(
success: true,
status: $checkoutPaymentStatus,
statusCode: Response::HTTP_OK
);

$processPaymentResponse-&gt;setRedirectUrl(match ($httpMetadata-&gt;getStatusCode()) {
Response::HTTP_ACCEPTED =&gt; $this-&gt;accessor-&gt;getValue($response, '[_links][redirect][href]'),
default =&gt; null,
});

$this-&gt;getPaymentStateResolver()-&gt;resolve($payment);

return $processPaymentResponse;
} catch (\Exception $asyncPaymentException) {
$this-&gt;logger-&gt;error($asyncPaymentException-&gt;getMessage());

return new ProcessPaymentResponse(
success: false,
errorMessage: $asyncPaymentException-&gt;getMessage(),
status: PaymentStatusInterface::ERROR,
statusCode: 0 === $asyncPaymentException-&gt;getCode() ? Response::HTTP_BAD_REQUEST : $asyncPaymentException-&gt;getCode()
);
} finally {
$this-&gt;paymentManager-&gt;flush();
}
}

/**
@throws PaymentException
/

### `getCheckoutToken`

- **Parameters**: `?string $tokenType = null, array|string|null $tokenData = null`
- **Description**: @throws CheckoutArgumentException
@throws CheckoutException
@throws CheckoutApiException
/

### `handleCheckoutPayment`

- **Parameters**: `Payment $payment`

### `getPaymentIdFromPaymentLink`

- **Parameters**: `string $checkoutPaymentLinkID`

### `processPaymentLink`

- **Parameters**: `Order $order`
- **Description**: @deprecated Need to be refactored since backoffice has his own payment method implementation
was used before on the Sylius backoffice. (see 'return_url' on PaymentLinkRequestFactory)
/

### `getCardRepresentation`

- **Parameters**: `PaymentInstrument $paymentInstrument`


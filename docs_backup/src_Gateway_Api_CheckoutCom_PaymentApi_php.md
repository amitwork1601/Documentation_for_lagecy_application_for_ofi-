# PaymentApi.php

**Path**: `src\Gateway\Api\CheckoutCom\PaymentApi.php`

## Summary
The `PaymentApi` class is a wrapper for Checkout.com payment gateway integration that handles payment request processing for both regular orders and subscription orders. It extends `CheckoutComClient` to provide functionality for initiating payments, creating payment tokens (Apple Pay, Google Pay), and generating payment links, while managing order number assignment and proper error handling through idempotency keys and payment exceptions.

## Classes
- `PaymentApi`

## Function Details

### `getPaymentDetails`

- **Parameters**: `string $checkoutPaymentId`
- **Description**: @throws PaymentException
/
public function requestPayment(
Order|SubscriptionOrder $order,
?string $idempotencyKey = null,
?string $token = null,
?string $currentUrl = null,
): array {
$this-&gt;orderNumberAssigner-&gt;assignNumber($order);

try {
return $this-&gt;getOauthCheckoutApi()
-&gt;getPaymentsClient()
-&gt;requestPayment(
$this-&gt;paymentRequestFactory-&gt;create(
$order,
$this-&gt;clientConfig,
$token,
$currentUrl
),
$idempotencyKey
)
;
} catch (CheckoutException $exception) {
throw PaymentException::requestPaymentException($exception-&gt;getMessage());
}
}

/**
@param string $checkoutPaymentId The payment or payment session identifier

@throws PaymentException
/

### `getPaymentActions`

- **Parameters**: `string $checkoutPaymentId`
- **Description**: @var HttpMetadata|null $httpMetadataPaymentDetails */
$httpMetadataPaymentDetails = $this-&gt;accessor-&gt;getValue(
$checkoutComPaymentDetails,
'[http_metadata]'
);

if (Response::HTTP_OK !== $httpMetadataPaymentDetails-&gt;getStatusCode()) {
throw PaymentException::retrievePaymentDetailsException('Wrong api call status code');
}

return $checkoutComPaymentDetails;
} catch (CheckoutException $e) {
throw PaymentException::retrievePaymentDetailsException($e-&gt;getMessage());
}
}

/**
@param string $checkoutPaymentId The payment or payment session identifier

@throws CheckoutApiException|CheckoutArgumentException|CheckoutException
/

### `getPaymentLinkDetails`

- **Parameters**: `string $paymentLinkId`
- **Description**: @throws CheckoutApiException|CheckoutArgumentException|CheckoutException
/

### `requestWalletToken`

- **Parameters**: `string $type, array $tokenData`
- **Description**: @throws CheckoutApiException|CheckoutArgumentException|CheckoutException
/

### `requestPaymentLink`

- **Parameters**: `Order $order`
- **Description**: @throws PaymentException
/


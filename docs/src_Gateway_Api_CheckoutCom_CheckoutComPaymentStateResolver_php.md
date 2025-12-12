# CheckoutComPaymentStateResolver.php

**Path**: `src\Gateway\Api\CheckoutCom\CheckoutComPaymentStateResolver.php`

## Summary
This class resolves and synchronizes payment states between Checkout.com payment gateway and the application's internal payment/order system. It retrieves payment status from Checkout.com's API, then applies appropriate state transitions to both the Payment entity and associated Order (including subscription orders) based on the gateway's response, handling various payment statuses like authorized, captured, declined, or canceled.

## Classes
- `CheckoutComPaymentStateResolver`

## Function Details

### `resolve`

- **Parameters**: `Payment $payment`
- **Description**: @throws CheckoutArgumentException
@throws CheckoutApiException
@throws CheckoutException
/

### `getCheckoutPaymentId`

- **Parameters**: `Payment $payment`
- **Description**: @var HttpMetadata|null $httpMetadata */
$httpMetadata = $this-&gt;accessor-&gt;getValue($response, '[http_metadata]');
Assert::notNull($httpMetadata);

if (Response::HTTP_OK !== $httpMetadata-&gt;getStatusCode()) {
throw CheckoutComPaymentStateResolverException::apiResponseException(Response::$statusTexts[$httpMetadata-&gt;getStatusCode()], $httpMetadata-&gt;getStatusCode());
}

$this-&gt;resolveState($payment, $this-&gt;accessor-&gt;getValue($response, '[status]'));

$detailsPayment = array_merge($payment-&gt;getDetails(), [
'cko-payment-id' =&gt; $checkoutPaymentID,
'status' =&gt; $this-&gt;accessor-&gt;getValue($response, '[status]'),
'cko-payment-details' =&gt; $response,
]);

if (null !== $actions = $this-&gt;getPaymentActions($checkoutPaymentID)) {
$detailsPayment = array_merge($detailsPayment, [
'cko-payment-actions' =&gt; $actions,
]);
}

if (PaymentInterfaceAlias::STATE_COMPLETED === $payment-&gt;getState()) {
$detailsPayment = array_merge($detailsPayment, [
'transaction_id' =&gt; $checkoutPaymentID,
]);
}

$payment-&gt;setDetails($detailsPayment);
} catch (CheckoutApiException|PaymentException|CheckoutComPaymentStateResolverException $e) {
$this-&gt;resolveError($payment, $e-&gt;getMessage());
} finally {
$this-&gt;paymentManager-&gt;flush();
}
}

public function resolveError(PaymentInterface $payment, ?string $error = null, ?array $errorDetails = null): void
{
$paymentDetails = array_merge($payment-&gt;getDetails(), [
'status' =&gt; PaymentStatusInterface::ERROR,
]);

if (null !== $error) {
$paymentDetails['cko-status-error'] = $error;
}

if (null !== $errorDetails) {
$paymentDetails['cko-status-error-details'] = $errorDetails;
}

// Log error in payment details
$payment-&gt;setDetails($paymentDetails);

$this-&gt;paymentTransition-&gt;apply($payment, PaymentTransitions::TRANSITION_FAIL);
$this-&gt;paymentManager-&gt;flush();
}

/**
@throws CheckoutArgumentException
@throws CheckoutException
@throws CheckoutApiException
/

### `getPaymentActions`

- **Parameters**: `string $checkoutPaymentId`


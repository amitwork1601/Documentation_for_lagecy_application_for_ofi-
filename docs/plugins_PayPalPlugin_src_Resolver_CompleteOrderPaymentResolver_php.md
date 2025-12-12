# CompleteOrderPaymentResolver.php

**Path**: `plugins\PayPalPlugin\src\Resolver\CompleteOrderPaymentResolver.php`

## Summary
This class resolves and completes PayPal order payments by executing the payment finalization process through the Payum gateway. It retrieves the appropriate payment gateway configuration from the payment method and triggers a `CompleteOrder` request with the payment details and PayPal order ID, effectively finalizing the transaction in the PayPal payment flow within the Sylius e-commerce platform.

## Classes
- `CompleteOrderPaymentResolver`

## Function Details

### `__construct`

- **Parameters**: `Payum $payum`

### `resolve`

- **Parameters**: `PaymentInterface $payment, string $payPalOrderId`


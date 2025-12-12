# CapturePaymentResolver.php

**Path**: `plugins\PayPalPlugin\src\Resolver\CapturePaymentResolver.php`

## Summary
The `CapturePaymentResolver` class is responsible for initiating payment capture operations through the PayPal payment gateway in a Sylius e-commerce system. It retrieves the appropriate payment gateway configuration from a payment object and executes a Payum `Capture` request to process the payment transaction, acting as a bridge between Sylius's payment model and the Payum payment processing library.

## Classes
- `CapturePaymentResolver`

## Function Details

### `__construct`

- **Parameters**: `Payum $payum`

### `resolve`

- **Parameters**: `PaymentInterface $payment`


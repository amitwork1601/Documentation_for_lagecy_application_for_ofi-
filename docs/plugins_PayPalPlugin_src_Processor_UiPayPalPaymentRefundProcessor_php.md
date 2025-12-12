# UiPayPalPaymentRefundProcessor.php

**Path**: `plugins\PayPalPlugin\src\Processor\UiPayPalPaymentRefundProcessor.php`

## Summary
This class is a decorator/wrapper around PayPal payment refund functionality specifically for UI operations in the Sylius e-commerce platform. It delegates refund processing to an underlying `PaymentRefundProcessorInterface` implementation while catching PayPal-specific refund exceptions (`PayPalOrderRefundException`) and re-throwing them as Sylius resource update exceptions (`UpdateHandlingException`) to properly integrate with Sylius's UI exception handling system.

## Classes
- `UiPayPalPaymentRefundProcessor`

## Function Details

### `__construct`

- **Parameters**: `PaymentRefundProcessorInterface $paymentRefundProcessor`

### `refund`

- **Parameters**: `PaymentInterface $payment`


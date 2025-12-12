# VoidPayPalPaymentCompleteProcessor.php

**Path**: `plugins\PayPalPlugin\tests\Service\VoidPayPalPaymentCompleteProcessor.php`

## Summary
This is a test stub implementation of the `PaymentCompleteProcessorInterface` that provides a no-op (void) version of the payment completion process. It exists specifically for Behat testing scenarios to prevent actual PayPal API calls from being made during automated tests, allowing tests to run without external dependencies or side effects.

## Classes
- `VoidPayPalPaymentCompleteProcessor`

## Function Details

### `completePayment`

- **Parameters**: `PaymentInterface $payment`


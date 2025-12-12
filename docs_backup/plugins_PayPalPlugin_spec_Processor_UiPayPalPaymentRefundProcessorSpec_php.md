# UiPayPalPaymentRefundProcessorSpec.php

**Path**: `plugins\PayPalPlugin\spec\Processor\UiPayPalPaymentRefundProcessorSpec.php`

## Summary
This is a PHPSpec test specification for a UI-specific PayPal payment refund processor in the Sylius e-commerce platform. It verifies that the processor correctly wraps refund operations by converting PayPal-specific refund exceptions into generic `UpdateHandlingException` for UI handling, while allowing successful refunds to complete normally. The spec ensures proper error boundary behavior when processing PayPal refunds through the admin interface.

## Classes
- `UiPayPalPaymentRefundProcessorSpec`

## Function Details

### `let`

- **Parameters**: `PaymentRefundProcessorInterface $paymentRefundProcessor`

### `it_implements_payment_refund_processor_interface`



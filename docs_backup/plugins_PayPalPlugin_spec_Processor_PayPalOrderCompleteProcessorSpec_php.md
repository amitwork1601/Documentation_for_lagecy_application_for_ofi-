# PayPalOrderCompleteProcessorSpec.php

**Path**: `plugins\PayPalPlugin\spec\Processor\PayPalOrderCompleteProcessorSpec.php`

## Summary
This is a PHPSpec test specification for a PayPal order completion processor in the Sylius e-commerce platform. It verifies that the processor correctly completes PayPal payment orders by delegating to a payment state manager when the order's last processing payment uses the PayPal gateway, and ensures it skips processing for non-PayPal payment methods. The tests validate the business logic for finalizing PayPal-specific order payments within Sylius's payment workflow.

## Classes
- `PayPalOrderCompleteProcessorSpec`

## Function Details

### `let`

- **Parameters**: `PaymentStateManagerInterface $paymentStateManager`


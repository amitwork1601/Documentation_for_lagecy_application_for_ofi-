# OrderPaymentProcessor.php

**Path**: `plugins\PayPalPlugin\src\Processor\OrderPaymentProcessor.php`

## Summary
The `OrderPaymentProcessor` class is a decorator for Sylius order payment processing that adds special handling for PayPal payments. It checks if an order has a processing payment with "CAPTURED" status from PayPal and preserves it, while canceling any non-PayPal processing payments before delegating to the base processor. This ensures PayPal payments in certain states are not inadvertently modified during standard order processing workflows.

## Classes
- `OrderPaymentProcessor`

## Function Details

### `process`

- **Parameters**: `OrderInterface $order`

### `getFactoryName`

- **Parameters**: `PaymentInterface $payment`


# PaymentChargesProcessor.php

**Path**: `src\Order\Processor\PaymentChargesProcessor.php`

## Summary
The `PaymentChargesProcessor` is an order processor that applies payment method-specific charges (fees) to orders based on the order total and selected payment method. It removes any existing payment charge adjustments, retrieves the payment method from the cart-state payment, and adds appropriate charge adjustments when the order total falls within configured charge ranges for the specific channel.

## Classes
- `PaymentChargesProcessor`

## Function Details

### `__construct`

- **Parameters**: `private readonly FactoryInterface $adjustmentFactory`

### `process`

- **Parameters**: `BaseOrderInterface $order`


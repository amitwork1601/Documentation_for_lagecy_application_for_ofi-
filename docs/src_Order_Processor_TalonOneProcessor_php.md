# TalonOneProcessor.php

**Path**: `src\Order\Processor\TalonOneProcessor.php`

## Summary
The `TalonOneProcessor` is an order processor that integrates with the Talon.One promotional campaign management system to apply discounts, coupons, and loyalty program rules to orders. It updates customer or anonymous profiles in Talon.One, creates a customer session with the current order details, and processes the response to apply promotional effects (like coupon codes, discounts, and loyalty points) to the order. The processor includes error handling for critical Talon.One failures and can gracefully fall back when the integration is disabled via feature flag or encounters non-critical errors.

## Classes
- `TalonOneProcessor`

## Function Details

### `process`

- **Parameters**: `OrderInterface $order`


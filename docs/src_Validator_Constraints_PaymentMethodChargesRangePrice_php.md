# PaymentMethodChargesRangePrice.php

**Path**: `src\Validator\Constraints\PaymentMethodChargesRangePrice.php`

## Summary
This is a Symfony validation constraint class that enforces business rules for payment method price range configurations. It validates that price ranges don't overlap, have unique minimum and maximum values, and that minimum values are less than maximum values within each range. The constraint is designed to ensure data integrity when defining tiered pricing structures for payment methods.

## Classes
- `PaymentMethodChargesRangePrice`

## Function Details

### `getTargets`



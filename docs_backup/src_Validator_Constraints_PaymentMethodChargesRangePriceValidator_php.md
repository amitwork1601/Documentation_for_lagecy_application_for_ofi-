# PaymentMethodChargesRangePriceValidator.php

**Path**: `src\Validator\Constraints\PaymentMethodChargesRangePriceValidator.php`

## Summary
This validator ensures that payment method charge ranges are properly configured by validating that the minimum price is less than the maximum price for each range, and that price ranges don't overlap with each other. It's used to prevent configuration errors in payment processing systems where different fees may apply to different transaction amount ranges.

## Classes
- `PaymentMethodChargesRangePriceValidator`

## Function Details

### `validate`

- **Parameters**: `$value, Constraint $constraint`

### `formatPrice`

- **Parameters**: `$price`

### `getDuplicatesRanges`

- **Parameters**: `$ranges`

### `hasOverlappingRange`

- **Parameters**: `$ranges`


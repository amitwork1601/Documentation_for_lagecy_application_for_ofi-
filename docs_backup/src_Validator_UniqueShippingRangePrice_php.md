# UniqueShippingRangePrice.php

**Path**: `src\Validator\UniqueShippingRangePrice.php`

## Summary
This is a custom Symfony validation constraint that ensures shipping price ranges are unique within the system. It acts as a class-level constraint (rather than property-level) to validate that no overlapping or duplicate shipping range prices exist, likely checking that price ranges don't conflict with each other across minimum/maximum value boundaries.

## Classes
- `UniqueShippingRangePrice`

## Function Details

### `getTargets`



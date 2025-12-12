# UniqueShippingRangePriceValidator.php

**Path**: `src\Validator\UniqueShippingRangePriceValidator.php`

## Summary
This validator ensures that shipping range prices do not overlap or conflict with existing ranges for a given shipping method. It checks both the minimum and maximum range values against the database to prevent duplicate or conflicting shipping price ranges, adding validation violations when overlaps are detected. The validator is part of a business rule enforcement system for maintaining unique, non-overlapping price ranges in a shipping cost calculation feature.

## Classes
- `UniqueShippingRangePriceValidator`

## Function Details

### `__construct`

- **Parameters**: `ShippingRangePriceRepository $shippingRangePriceRepository, ShippingMethodRepository $shippingMethodRepository`

### `validate`

- **Parameters**: `$value, Constraint $constraint`


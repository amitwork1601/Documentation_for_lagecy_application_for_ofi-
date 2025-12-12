# RequestTrait.php

**Path**: `src\TalonOne\Core\DTO\RequestTrait.php`

## Summary
This trait provides a utility method for formatting monetary prices in the TalonOne integration context. It converts integer price values (stored in cents/minor units) to floating-point decimal format with two decimal places, handling null values by returning 0. This is commonly used when preparing price data for API requests to the TalonOne promotion/coupon management system.

## Function Details

### `formatPrice`

- **Parameters**: `?int $price`


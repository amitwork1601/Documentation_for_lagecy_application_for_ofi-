# FlatRateCalculator.php

**Path**: `src\Shipping\Calculator\FlatRateCalculator.php`

## Summary
The `FlatRateCalculator` class is a decorator for Sylius's flat rate shipping calculator that adds channel-specific and date-based configuration support. It calculates shipping costs by validating that the order's channel has a properly configured flat rate, then applies date-range rules (using `validFrom` dates) to determine the appropriate shipping amount for the order. This allows for different flat rate shipping prices across different sales channels and time periods.

## Classes
- `FlatRateCalculator`

## Function Details

### `calculate`

- **Parameters**: `BaseShipmentInterface $subject, array $configuration`

### `getType`



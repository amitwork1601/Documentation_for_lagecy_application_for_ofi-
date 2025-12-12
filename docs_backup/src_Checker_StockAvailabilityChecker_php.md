# StockAvailabilityChecker.php

**Path**: `src\Checker\StockAvailabilityChecker.php`

## Summary
This class is a custom inventory availability checker that decorates Sylius's default inventory checker to simplify stock validation logic. Instead of checking actual stock quantities against requested amounts, it delegates all availability decisions to the `isInStock()` method of the stockable item, effectively treating inventory as a binary available/unavailable state regardless of the requested quantity.

## Classes
- `StockAvailabilityChecker`

## Function Details

### `isStockAvailable`

- **Parameters**: `StockableInterface $stockable`

### `isStockSufficient`

- **Parameters**: `StockableInterface $stockable, int $quantity`


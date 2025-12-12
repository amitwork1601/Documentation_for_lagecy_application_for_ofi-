# ProductVariantPriceCalculator.php

**Path**: `src\Calculator\ProductVariantPriceCalculator.php`

## Summary
This class is a decorator for Sylius's product variant price calculator that adds subscription pricing functionality to an e-commerce system. It extends the standard price calculation by introducing a `calculateSubscriptionPrice()` method that applies a configurable percentage discount (via `abo.percent.reduction` parameter) to products marked as subscribable, while delegating all other price calculation operations to the underlying Sylius calculator.

## Classes
- `ProductVariantPriceCalculator`

## Function Details

### `calculateSubscriptionPrice`

- **Parameters**: `ProductVariantInterface $productVariant, array $context`

### `calculate`

- **Parameters**: `ProductVariantInterface $productVariant, array $context`

### `calculateOriginal`

- **Parameters**: `ProductVariantInterface $productVariant, array $context`

### `calculateLowestPriceBeforeDiscount`

- **Parameters**: `ProductVariantInterface $productVariant, array $context`

### `getPricesWithAndWithoutTaxes`

- **Parameters**: `int $price, ProductVariantInterface $productVariant`
- **Description**: @return int[]
/


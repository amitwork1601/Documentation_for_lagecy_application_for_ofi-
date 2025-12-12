# ExcludedProductFilter.php

**Path**: `src\Promotion\Filter\ExcludedProductFilter.php`

## Summary
This class implements a promotion filter for Sylius e-commerce that excludes specific products from promotional offers. It filters out order items whose product codes match those listed in the configuration's `excluded_products_filter`, returning only eligible items that should receive the promotion.

## Classes
- `ExcludedProductFilter`

## Function Details

### `filter`

- **Parameters**: `array $items, array $configuration`


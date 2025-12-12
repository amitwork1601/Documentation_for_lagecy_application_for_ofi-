# ExcludedProductVariantFilter.php

**Path**: `src\Promotion\Filter\ExcludedProductVariantFilter.php`

## Summary
This class implements a promotion filter for the Sylius e-commerce framework that excludes specific product variants from promotional eligibility. It filters out order items whose product variant codes match those listed in the configuration's excluded variants list, returning only the items that should be eligible for the promotion.

## Classes
- `ExcludedProductVariantFilter`

## Function Details

### `filter`

- **Parameters**: `array $items, array $configuration`


# ProductVariantFilter.php

**Path**: `src\Promotion\Filter\ProductVariantFilter.php`

## Summary
The `ProductVariantFilter` class implements a promotion filtering mechanism for Sylius e-commerce that filters cart/order items based on specific product variant codes. It examines a configuration array containing whitelisted variant codes and returns only those items whose variants match the configured list, allowing promotions to be restricted to specific product variants rather than entire products.

## Classes
- `ProductVariantFilter`

## Function Details

### `filter`

- **Parameters**: `array $items, array $configuration`


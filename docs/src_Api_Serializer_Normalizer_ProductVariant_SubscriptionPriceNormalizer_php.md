# SubscriptionPriceNormalizer.php

**Path**: `src\Api\Serializer\Normalizer\ProductVariant\SubscriptionPriceNormalizer.php`

## Summary
This normalizer enriches ProductVariant API responses with calculated subscription pricing information for specific serialization contexts. It uses Sylius' price calculator and channel context to compute and inject subscription prices into the normalized output, but only for designated serialization groups (like product/cart/order views in admin and shop contexts). The normalizer prevents infinite recursion through a flag and conditionally activates based on the current serialization group being used.

## Classes
- `SubscriptionPriceNormalizer`

## Function Details

### `normalize`

- **Parameters**: `$object, $format = null, array $context = []`

### `supportsNormalization`

- **Parameters**: `$data, $format = null, $context = []`


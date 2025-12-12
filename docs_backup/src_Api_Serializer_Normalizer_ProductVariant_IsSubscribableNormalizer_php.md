# IsSubscribableNormalizer.php

**Path**: `src\Api\Serializer\Normalizer\ProductVariant\IsSubscribableNormalizer.php`

## Summary
This normalizer extends the API serialization of `ProductVariant` entities to add an `isSubscribable` field that indicates whether a product variant is available for subscription. It combines two business rules: the variant must be inherently subscribable AND not disabled for new subscriptions, with the normalization being activated only for specific serialization groups (admin/shop product views, orders, and cart).

## Classes
- `IsSubscribableNormalizer`

## Function Details

### `normalize`

- **Parameters**: `$object, $format = null, array $context = []`

### `supportsNormalization`

- **Parameters**: `$data, $format = null, $context = []`


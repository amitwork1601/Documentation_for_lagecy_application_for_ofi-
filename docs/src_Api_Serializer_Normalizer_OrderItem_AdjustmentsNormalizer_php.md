# AdjustmentsNormalizer.php

**Path**: `src\Api\Serializer\Normalizer\OrderItem\AdjustmentsNormalizer.php`

## Summary
The `AdjustmentsNormalizer` class is a Symfony serializer normalizer that enhances the serialization of `OrderItem` entities by recursively collecting and normalizing all adjustments (like discounts, taxes, or promotions) applied to the order item. It activates only for specific serialization groups (admin, shop, webmethod contexts) and prevents infinite recursion using a context flag, ultimately adding a structured `adjustments` array to the normalized order item data.

## Classes
- `AdjustmentsNormalizer`

## Function Details

### `normalize`

- **Parameters**: `$object, ?string $format = null, array $context = []`

### `supportsNormalization`

- **Parameters**: `$data, ?string $format = null, $context = []`


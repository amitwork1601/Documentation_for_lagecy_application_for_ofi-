# OrdinaryNormalizer.php

**Path**: `src\Api\Serializer\Normalizer\OrderItem\OrdinaryNormalizer.php`

## Summary
The `OrdinaryNormalizer` class is a Symfony serializer normalizer that adds an `isOrdinary` flag to order item data during serialization to distinguish between regular order items and subscription-based order items. It operates within specific serialization contexts (cart, order views, subscriptions) and checks whether an order item belongs to a subscription order to determine if it should be marked as "ordinary" (non-subscription) or not.

## Classes
- `OrdinaryNormalizer`

## Function Details

### `normalize`

- **Parameters**: `$object, ?string $format = null, array $context = []`

### `supportsNormalization`

- **Parameters**: `$data, ?string $format = null, $context = []`


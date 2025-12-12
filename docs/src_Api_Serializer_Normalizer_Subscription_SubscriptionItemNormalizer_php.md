# SubscriptionItemNormalizer.php

**Path**: `src\Api\Serializer\Normalizer\Subscription\SubscriptionItemNormalizer.php`

## Summary
This normalizer customizes the serialization of `SubscriptionItem` entities by calculating and adding pricing information to the normalized output. It retrieves the product variant's channel-specific pricing, computes unit prices (both original and potentially discounted based on a configurable subscription reduction percentage), and calculates subtotal and total amounts based on quantity. The class implements Symfony's normalizer pattern with a guard flag to prevent recursive normalization calls.

## Classes
- `SubscriptionItemNormalizer`

## Function Details

### `supportsNormalization`

- **Parameters**: `mixed $data, ?string $format = null, array $context = []`

### `normalize`

- **Parameters**: `mixed $object, ?string $format = null, array $context = []`

### `revertUnitPrice`

- **Parameters**: `int $price`


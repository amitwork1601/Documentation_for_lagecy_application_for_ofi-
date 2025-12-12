# SubscriberNormalizer.php

**Path**: `src\Api\Serializer\Normalizer\Customer\SubscriberNormalizer.php`

## Summary
This normalizer extends the serialization of Customer entities by adding a `subscriber` boolean field that indicates whether the customer has any active (non-stopped) subscriptions. It operates within specific serialization groups (primarily 'sylius:shop:customer:show') and uses the decorator pattern to augment the standard customer normalization with subscription status information for API responses.

## Classes
- `SubscriberNormalizer`

## Function Details

### `normalize`

- **Parameters**: `$object, ?string $format = null, array $context = []`

### `supportsNormalization`

- **Parameters**: `$data, ?string $format = null, $context = []`


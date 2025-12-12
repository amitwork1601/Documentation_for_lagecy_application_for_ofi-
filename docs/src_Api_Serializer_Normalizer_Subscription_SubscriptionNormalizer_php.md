# SubscriptionNormalizer.php

**Path**: `src\Api\Serializer\Normalizer\Subscription\SubscriptionNormalizer.php`

## Summary
The `SubscriptionNormalizer` class is a Symfony serializer normalizer that customizes the serialization of `Subscription` entities, specifically filtering their associated subscription orders. It removes incomplete or cancelled orders from the normalized output by only including orders that are either completed (checkoutState === 'completed') or not cancelled (draftState !== 'cancelled'), ensuring API responses only expose relevant subscription order data to clients.

## Classes
- `SubscriptionNormalizer`

## Function Details

### `normalize`

- **Parameters**: `$object, ?string $format = null, array $context = []`

### `supportsNormalization`

- **Parameters**: `$data, ?string $format = null, array $context = []`


# PickupPointHasShippingMethodSubscriptionNormalizer.php

**Path**: `src\Api\Serializer\Normalizer\PickupPoint\PickupPointHasShippingMethodSubscriptionNormalizer.php`

## Summary
This normalizer customizes the serialization of `PickupPointHasShippingMethod` entities specifically for subscription-related contexts. It enhances the normalized data by calculating shipping costs for subscriptions and determining pickup point availability based on the current user's active subscriptions, operating at priority 110 in the serialization chain to run before standard normalizers.

## Classes
- `PickupPointHasShippingMethodSubscriptionNormalizer`

## Function Details

### `normalize`

- **Parameters**: `$object, ?string $format = null, array $context = []`

### `supportsNormalization`

- **Parameters**: `$data, ?string $format = null, array $context = []`


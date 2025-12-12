# PickupPointEligibilityNormalizer.php

**Path**: `src\Api\Serializer\Normalizer\Subscription\PickupPointEligibilityNormalizer.php`

## Summary
This normalizer augments the serialization of `Subscription` entities by adding pickup point eligibility information to the API response. It uses `PickupPointShipmentEligibilityChecker` to determine if a subscription is eligible for pickup point shipment delivery, then adds an `isEligible` field to the normalized data when specific serialization groups (like `shop:subscription:read`) are active.

## Classes
- `PickupPointEligibilityNormalizer`

## Function Details

### `normalize`

- **Parameters**: `$object, ?string $format = null, array $context = []`

### `supportsNormalization`

- **Parameters**: `$data, ?string $format = null, array $context = []`


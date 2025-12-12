# PickupPointEligibilityNormalizer.php

**Path**: `src\Api\Serializer\Normalizer\Order\PickupPointEligibilityNormalizer.php`

## Summary
This normalizer extends the serialization of Order objects to include pickup point eligibility information. It decorates the standard order normalization process by adding an `isEligibleToPickupPoint` boolean field to the serialized data, which is determined by checking if the order qualifies for pickup point shipping using the `PickupPointShipmentEligibilityChecker`. The normalizer is conditionally active based on configured serialization groups (defaults to admin order views, shop cart, and shop order listings) and only applies to orders in specific states like cart status.

## Classes
- `PickupPointEligibilityNormalizer`

## Function Details

### `normalize`

- **Parameters**: `$object, ?string $format = null, array $context = []`

### `supportsNormalization`

- **Parameters**: `$data, ?string $format = null, array $context = []`


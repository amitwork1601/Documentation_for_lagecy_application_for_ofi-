# PickupPointNormalizer.php

**Path**: `src\Api\Serializer\Normalizer\PickupPoint\PickupPointNormalizer.php`

## Summary
The `PickupPointNormalizer` class is a Symfony serializer normalizer that transforms `PickupPoint` entities into API-compatible array representations for pickup point search operations. It validates shipping method eligibility for pickup points in the context of the current cart/order, ensuring only valid pickup locations are presented to customers during checkout in both admin and shop contexts. The normalizer integrates with Sylius e-commerce framework to check shipping method compatibility and operates within specific serialization groups for order and subscription pickup point searches.

## Classes
- `PickupPointNormalizer`

## Function Details

### `normalize`

- **Parameters**: `$object, ?string $format = null, array $context = []`

### `supportsNormalization`

- **Parameters**: `$data, ?string $format = null, array $context = []`


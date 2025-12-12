# UpdShippingMethodNormalizer.php

**Path**: `src\Api\Serializer\Normalizer\Shipment\UpdShippingMethodNormalizer.php`

## Summary
This normalizer customizes the serialization of UPD (likely a shipping provider) shipping methods in a Sylius e-commerce application. It enriches shipping method data with pickup point information by querying the `PickupPointHasShippingMethod` relationship, but only when specific serialization groups related to orders, subscriptions, and pickup points are active.

## Classes
- `UpdShippingMethodNormalizer`

## Function Details

### `normalize`

- **Parameters**: `mixed $object, ?string $format = null, array $context = []`

### `supportsNormalization`

- **Parameters**: `mixed $data, ?string $format = null, array $context = []`


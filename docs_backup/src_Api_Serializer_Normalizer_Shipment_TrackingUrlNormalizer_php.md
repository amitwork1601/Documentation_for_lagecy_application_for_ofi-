# TrackingUrlNormalizer.php

**Path**: `src\Api\Serializer\Normalizer\Shipment\TrackingUrlNormalizer.php`

## Summary
This normalizer enhances the serialization of `ShipmentInterface` objects by automatically adding a `trackingUrl` field to the serialized output. It specifically activates for certain serialization groups (admin order views, shop cart/order views, and webmethod order reads) and uses the `ShippingService` to generate tracking URLs for shipments, preventing infinite recursion through a context flag.

## Classes
- `TrackingUrlNormalizer`

## Function Details

### `normalize`

- **Parameters**: `$object, ?string $format = null, array $context = []`

### `supportsNormalization`

- **Parameters**: `$data, ?string $format = null, $context = []`


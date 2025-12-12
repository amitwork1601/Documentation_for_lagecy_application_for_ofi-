# ShipupUrlNormalizer.php

**Path**: `src\Api\Serializer\Normalizer\Shipment\ShipupUrlNormalizer.php`

## Summary
This normalizer enhances the serialization of Shipment entities by adding Shipup tracking URL information to the API response. It checks if a shipment is available in the Shipup shipping tracking service, updates the shipment's availability status if it has changed, and integrates with Symfony's serialization pipeline for specific serialization groups (admin order views, shop cart/order views). The normalizer follows the decorator pattern to extend standard shipment serialization with third-party shipping tracking capabilities.

## Classes
- `ShipupUrlNormalizer`

## Function Details

### `normalize`

- **Parameters**: `$object, ?string $format = null, array $context = []`

### `supportsNormalization`

- **Parameters**: `$data, ?string $format = null, $context = []`


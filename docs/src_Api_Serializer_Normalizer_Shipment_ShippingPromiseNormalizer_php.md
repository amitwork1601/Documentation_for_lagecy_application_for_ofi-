# ShippingPromiseNormalizer.php

**Path**: `src\Api\Serializer\Normalizer\Shipment\ShippingPromiseNormalizer.php`

## Summary
This normalizer class enhances shipment serialization by calculating and adding shipping promise/delivery date information based on the shipment method's cutoff time and order payment status. It operates conditionally based on serialization groups (for webmethod and admin order read operations) and uses the order's payment completion time along with the shipping method's cutoff to determine delivery promises.

## Classes
- `ShippingPromiseNormalizer`

## Function Details

### `normalize`

- **Parameters**: `$object, ?string $format = null, array $context = []`

### `supportsNormalization`

- **Parameters**: `$data, ?string $format = null, $context = []`


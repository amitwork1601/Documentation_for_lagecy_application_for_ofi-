# ShippingMethodNormalizer.php

**Path**: `src\Api\Serializer\Normalizer\Shipment\ShippingMethodNormalizer.php`

## Summary
This normalizer customizes the serialization of `ShippingMethod` entities in the Sylius API, specifically adding calculated shipping costs to the normalized output. It intercepts shipping method normalization requests, retrieves the associated order and shipment context, calculates the shipping cost using registered shipping calculators, and appends the cost information to the serialized data before returning it to the API response.

## Classes
- `ShippingMethodNormalizer`

## Function Details

### `normalize`

- **Parameters**: `mixed $object, ?string $format = null, array $context = []`

### `supportsNormalization`

- **Parameters**: `mixed $data, ?string $format = null, array $context = []`


# ShippingMethodForSubscriptionNormalizer.php

**Path**: `src\Api\Serializer\Normalizer\Shipment\ShippingMethodForSubscriptionNormalizer.php`

## Summary
This normalizer extends the serialization of `ShippingMethod` entities specifically for subscription-based orders. It calculates and adds shipping costs to the normalized output by creating a temporary subscription order and using Sylius's shipping calculator registry, allowing API consumers to see shipping method pricing in the context of a customer's subscription rather than a regular order.

## Classes
- `ShippingMethodForSubscriptionNormalizer`

## Function Details

### `normalize`

- **Parameters**: `$object, ?string $format = null, array $context = []`

### `supportsNormalization`

- **Parameters**: `$data, ?string $format = null, array $context = []`


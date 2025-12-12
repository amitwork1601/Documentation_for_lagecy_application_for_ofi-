# ShippingMethodNormalizerDecorator.php

**Path**: `src\Api\Serializer\Normalizer\Shipment\ShippingMethodNormalizerDecorator.php`

## Summary
This decorator extends the shipping method normalization process to check for potential shipping fee discounts through the TalonOne promotional system. When the 'talon_one_apply' feature flag is enabled, it augments the normalized shipping method data with discount information for non-pickup-point shipments, allowing the API to communicate available shipping promotions to clients during the checkout process.

## Classes
- `ShippingMethodNormalizerDecorator`

## Function Details

### `normalize`

- **Parameters**: `mixed $object, ?string $format = null, array $context = []`

### `supportsNormalization`

- **Parameters**: `mixed $data, ?string $format = null, array $context = []`

### `isCollectionOperationFiltered`

- **Parameters**: `array $context`

### `getOrder`


### `getPriceWithTalonOneDiscount`

- **Parameters**: `$object, $price`


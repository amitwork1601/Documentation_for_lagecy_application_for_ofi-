# PickupPointHasShippingMethodNormalizer.php

**Path**: `src\Api\Serializer\Normalizer\PickupPoint\PickupPointHasShippingMethodNormalizer.php`

## Summary
This normalizer class is responsible for serializing `PickupPointHasShippingMethod` entities, which represent the relationship between pickup points and their available shipping methods. It enriches the serialization with calculated shipping costs and applies TalonOne promotional discounts to shipping fees, specifically for order pickup point search contexts in both shop and admin interfaces.

## Classes
- `PickupPointHasShippingMethodNormalizer`

## Function Details

### `normalize`

- **Parameters**: `$object, ?string $format = null, array $context = []`

### `supportsNormalization`

- **Parameters**: `$data, ?string $format = null, array $context = []`

### `getOrder`


### `getPriceWithTalonOneDiscount`

- **Parameters**: `$object, $cart, $price`


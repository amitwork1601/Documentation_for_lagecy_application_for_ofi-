# ShippingMethodPriceNormalizer.php

**Path**: `src\Api\Serializer\Normalizer\Shipment\ShippingMethodPriceNormalizer.php`

## Summary
This normalizer calculates and injects shipping method prices into API responses for e-commerce orders. It retrieves the associated order and shipment, applies any potential shipping fee discounts (via TalonOne integration), calculates taxes, and adds the final price information to the serialized shipping method data before returning it to the API consumer.

## Classes
- `ShippingMethodPriceNormalizer`

## Function Details

### `supportsNormalization`

- **Parameters**: `mixed $data, ?string $format = null, array $context = []`

### `normalize`

- **Parameters**: `mixed $object, ?string $format = null, array $context = []`
- **Description**: @param ShippingMethod $object
@param string|null $format
@param array $context
@return array
/

### `getShippingMethodPrice`

- **Parameters**: `$data, $shippingMethod`

### `getOrder`


### `getShipment`

- **Parameters**: `OrderInterface $order`

### `calculatePrice`

- **Parameters**: `Order $order, Shipment $shipment, $shippingMethod, $data`

### `calculateSyliusPrice`

- **Parameters**: `ShipmentInterface $shipment, ShippingMethodInterface $shippingMethod`


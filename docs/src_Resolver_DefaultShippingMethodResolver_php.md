# DefaultShippingMethodResolver.php

**Path**: `src\Resolver\DefaultShippingMethodResolver.php`

## Summary
The `DefaultShippingMethodResolver` class is a decorator that extends Sylius's default shipping method resolution to handle custom shipping scenarios, particularly for pickup point addresses. It determines the appropriate default shipping method for an order's shipment by checking eligibility rules and filtering available methods based on the order's shipping address type (standard address vs. pickup point), ensuring only compatible shipping options are presented to customers.

## Classes
- `DefaultShippingMethodResolver`

## Function Details

### `getDefaultShippingMethod`

- **Parameters**: `ShipmentInterface $shipment`

### `getEligibleShippingMethods`

- **Parameters**: `OrderInterface $order, ShipmentInterface $shipment`

### `getShippingMethods`

- **Parameters**: `ChannelInterface $channel, ShipmentInterface $shipment, ?AddressInterface $address`


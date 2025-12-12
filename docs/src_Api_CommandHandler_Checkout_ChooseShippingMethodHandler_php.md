# ChooseShippingMethodHandler.php

**Path**: `src\Api\CommandHandler\Checkout\ChooseShippingMethodHandler.php`

## Summary
This command handler processes the selection of a shipping method during the checkout process in an e-commerce system. It validates and applies a customer's chosen shipping method to their order/cart, including support for pickup point delivery options, while using locking mechanisms to prevent race conditions during concurrent order modifications. The handler ensures the selected shipping method is eligible for the shipment, updates the order state through a state machine transition, and validates the entire operation before persisting changes.

## Classes
- `ChooseShippingMethodHandler`

## Function Details

### `__invoke`

- **Parameters**: `ChooseShippingMethod $command`

### `processShippingMethodSelection`

- **Parameters**: `OrderInterface $cart, ChooseShippingMethod $command`

### `processPickupPointShipping`

- **Parameters**: `OrderInterface $cart, PickupPoint $pickupPoint, ShipmentInterface $shipment, ShippingMethodInterface $shippingMethod`

### `processHomeDelivery`

- **Parameters**: `OrderInterface $cart, ShipmentInterface $shipment, ShippingMethodInterface $shippingMethod`

### `validatePickupPointEligibility`

- **Parameters**: `OrderInterface $cart, PickupPoint $pickupPoint, ShippingMethodInterface $shippingMethod`

### `validateHomeDeliveryEligibility`

- **Parameters**: `ShipmentInterface $shipment, ShippingMethodInterface $shippingMethod`

### `setPickupPointAddress`

- **Parameters**: `OrderInterface $cart, PickupPoint $pickupPoint, ShippingMethodInterface $shippingMethod`

### `setShippingMethod`

- **Parameters**: `ShipmentInterface $shipment, ShippingMethodInterface $shippingMethod`

### `applyAddressTransition`

- **Parameters**: `OrderInterface $cart`

### `applyShippingTransition`

- **Parameters**: `OrderInterface $cart`

### `getCart`

- **Parameters**: `string $tokenValue`

### `validateTransition`

- **Parameters**: `OrderInterface $cart, ChooseShippingMethod $command`

### `getShipment`

- **Parameters**: `string $shipmentId, int $orderId`

### `validateOrder`

- **Parameters**: `OrderInterface $cart`


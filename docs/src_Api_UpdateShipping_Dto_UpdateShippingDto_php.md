# UpdateShippingDto.php

**Path**: `src\Api\UpdateShipping\Dto\UpdateShippingDto.php`

## Summary
This is a Data Transfer Object (DTO) that encapsulates shipping-related information for update operations in an e-commerce system. It holds shipping and billing addresses, shipping method selection, pickup point details, and flags indicating whether to ship to a pickup point and whether spreading is enabled. The class uses a fluent interface pattern (returning `$this` from setters) to allow method chaining when configuring shipping update requests.

## Classes
- `UpdateShippingDto`

## Function Details

### `getShippingAddress`


### `setShippingAddress`

- **Parameters**: `?Address $shippingAddress`

### `getBillingAddress`


### `setBillingAddress`

- **Parameters**: `?Address $billingAddress`

### `getShippingMethod`


### `setShippingMethod`

- **Parameters**: `?ShippingMethod $shippingMethod`

### `getPickupPoint`


### `setPickupPoint`

- **Parameters**: `?PickupPoint $pickupPoint`

### `isShipToPickupPoint`


### `setShipToPickupPoint`

- **Parameters**: `bool $shipToPickupPoint`

### `isSpreadOn`


### `setSpreadOn`

- **Parameters**: `bool $spreadOn`


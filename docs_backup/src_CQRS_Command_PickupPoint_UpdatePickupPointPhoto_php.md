# UpdatePickupPointPhoto.php

**Path**: `src\CQRS\Command\PickupPoint\UpdatePickupPointPhoto.php`

## Summary
This is a CQRS command class that represents an intent to update photos for pickup points associated with a specific shipping method. It encapsulates the shipping method identifier and an array of pickup point references, serving as a data transfer object that will be processed by a corresponding command handler to update pickup point photo information in the system.

## Classes
- `UpdatePickupPointPhoto`

## Function Details

### `__construct`

- **Parameters**: `int $shippingMethodId, array $pickupPointReferences = []`

### `getPickupPointReferences`


### `getShippingMethodId`



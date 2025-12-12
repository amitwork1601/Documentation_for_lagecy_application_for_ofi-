# PickupPointUpdater.php

**Path**: `src\PickupPoint\Updater\PickupPointUpdater.php`

## Summary
The `PickupPointUpdater` class is responsible for synchronizing pickup point entities with data from external sources by updating their attributes (name, location, openings, photo, and address) based on a `PickupPointDto`. It handles special business logic for different shipping methods (Mondial Relay, Colissimo) to determine when opening hours should be updated, and delegates address creation/updates to an `AddressPickupPointProvider`. This updater serves as a domain service that maintains consistency between the application's pickup point data and external pickup point provider information.

## Classes
- `PickupPointUpdater`

## Function Details

### `__construct`

- **Parameters**: `AddressPickupPointProvider $provider`

### `updateFromPickupPointDto`

- **Parameters**: `PickupPoint $pickupPoint, PickupPointDto $pickupPointDto, ShippingMethod $shippingMethod`

### `isPickupPointDtoDisabled`

- **Parameters**: `PickupPointDto $pickupPointDto`


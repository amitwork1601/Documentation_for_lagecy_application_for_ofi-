# PickupPointFactory.php

**Path**: `src\PickupPoint\Factory\PickupPointFactory.php`

## Summary
The `PickupPointFactory` class is a factory responsible for creating `PickupPoint` entities in a pickup/delivery point system. It implements the factory pattern by decorating a base factory, generating secure random tokens for new pickup points, and provides specialized creation methods including `createFromPickupPointDto()` which hydrates a pickup point entity from a DTO by mapping location, openings, photos, name, and resolving the full address through an `AddressPickupPointProvider`.

## Classes
- `PickupPointFactory`

## Function Details

### `createNew`


### `createFromPickupPointDto`

- **Parameters**: `PickupPointDto $pickupPointDto`


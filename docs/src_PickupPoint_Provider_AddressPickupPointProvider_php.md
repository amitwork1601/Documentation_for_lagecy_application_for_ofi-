# AddressPickupPointProvider.php

**Path**: `src\PickupPoint\Provider\AddressPickupPointProvider.php`

## Summary
The `AddressPickupPointProvider` class converts pickup point data transfer objects (DTOs) into Address entities for the addressing system. It serves as an adapter that maps pickup point information (name, location details) to standardized Address objects, setting company name instead of personal names and populating location fields from the pickup point data.

## Classes
- `AddressPickupPointProvider`

## Function Details

### `__construct`

- **Parameters**: `FactoryInterface $addressFactory`

### `getAddress`

- **Parameters**: `PickupPointDto $pickupPointDto`

### `updateAddress`

- **Parameters**: `Address $address, PickupPointDto $pickupPointDto`


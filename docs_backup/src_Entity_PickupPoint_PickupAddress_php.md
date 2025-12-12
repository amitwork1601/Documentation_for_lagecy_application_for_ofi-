# PickupAddress.php

**Path**: `src\Entity\PickupPoint\PickupAddress.php`

## Summary
The `PickupAddress` class extends the base `Address` entity to represent a specific type of address used for pickup point delivery locations. It adds an external reference identifier for integration with third-party pickup services and maintains a one-to-one relationship with a `PickupPoint` entity. The class includes a specialized `setAddress()` method that copies address data from a standard address and attempts to populate phone number information from the customer's profile or default address.

## Classes
- `PickupAddress`

## Function Details

### `__construct`

- **Parameters**: `?string $postCode = null, ?string $city = null, ?string $countryCode = null`

### `getExternalReference`


### `setExternalReference`

- **Parameters**: `string $externalReference`

### `getPickupPoint`


### `setPickupPoint`

- **Parameters**: `?PickupPoint $pickupPoint`

### `setAddress`

- **Parameters**: `Address $address, Customer $customer`


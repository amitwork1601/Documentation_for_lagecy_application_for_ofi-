# AddressRepository.php

**Path**: `src\Repository\AddressRepository.php`

## Summary
This repository extends Sylius's base AddressRepository to find existing addresses that match a given address's details. It searches for duplicate addresses by comparing street, city, name, postcode, country code, and optionally phone number, with special handling to include PickupAddress instances or addresses belonging to a specific customer. The primary purpose is to avoid creating duplicate address records in the database by locating previously saved addresses with identical information.

## Classes
- `AddressRepository`

## Function Details

### `findByOriginalAddress`

- **Parameters**: `AddressInterface $address, ?CustomerInterface $customer`


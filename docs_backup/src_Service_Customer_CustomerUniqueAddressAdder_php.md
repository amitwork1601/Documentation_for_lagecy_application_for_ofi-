# CustomerUniqueAddressAdder.php

**Path**: `src\Service\Customer\CustomerUniqueAddressAdder.php`

## Summary
This service implements Sylius's `CustomerAddressAdderInterface` to add addresses to customers while preventing duplicates. It compares new addresses against existing customer addresses using an address comparator, only adding the address if no match is found, and explicitly ignores pickup addresses (which should not be stored as customer addresses).

## Classes
- `CustomerUniqueAddressAdder`

## Function Details

### `__construct`

- **Parameters**: `AddressComparatorInterface $addressComparator`

### `add`

- **Parameters**: `CustomerInterface $customer, AddressInterface $address`


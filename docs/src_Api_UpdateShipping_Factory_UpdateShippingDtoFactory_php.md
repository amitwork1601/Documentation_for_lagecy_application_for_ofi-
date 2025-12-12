# UpdateShippingDtoFactory.php

**Path**: `src\Api\UpdateShipping\Factory\UpdateShippingDtoFactory.php`

## Summary
This factory class creates `UpdateShippingDto` objects by converting shipping-related data from API input commands into domain entities. It handles the transformation of billing addresses, shipping addresses, shipping methods, and pickup points by resolving IRIs (API resource identifiers) to actual entity objects like `ShippingMethod`, `Address`, and `PickupPoint`, while validating the data and associating it with a customer's addressable object (likely an order or subscription).

## Classes
- `UpdateShippingDtoFactory`

## Function Details

### `__construct`

- **Parameters**: `private IriConverterInterface $iriConverter`

### `createNew`

- **Parameters**: `Customer $customer, UpdateShipping $updateShipping, AddressableEntityInterface $adressableObject`

### `getAddress`

- **Parameters**: `string $addressIri, Customer $customer, ?AddressInterface $existingAddress`


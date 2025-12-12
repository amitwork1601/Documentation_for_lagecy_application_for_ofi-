# Address.php

**Path**: `src\Entity\Addressing\Address.php`

## Summary
This is a Doctrine entity class that extends Sylius's base Address model to represent customer addresses in an e-commerce system. It implements address management with additional fields beyond the base (like alias, secondary street, secondary phone number) and uses single-table inheritance to support both regular addresses and pickup point addresses. The class is exposed as an API Platform GraphQL resource with filtering and sorting capabilities, and includes audit tracking for address changes.

## Classes
- `Address`

## Function Details

### `__toString`


### `getAlias`

- **Parameters**: `bool $ensureDefaultAlias = false`

### `setAlias`

- **Parameters**: `?string $alias`

### `getEmailData`


### `isDefault`


### `getStreet2`


### `setStreet2`

- **Parameters**: `?string $street2`

### `getPhoneNumber2`


### `setPhoneNumber2`

- **Parameters**: `?string $phoneNumber2`

### `getIsDefault`


### `setIsDefault`


### `__clone`


### `override`

- **Parameters**: `self $address`

### `setOptionLabel`

- **Parameters**: `?string $optionLabel`

### `getOptionLabel`


### `getDeliveryInstructions`


### `setDeliveryInstructions`

- **Parameters**: `?string $deliveryInstructions`

### `getHash`


### `hashCode`

- **Parameters**: `str: string`

### `getClassName`


### `setClassName`

- **Parameters**: `string $className`


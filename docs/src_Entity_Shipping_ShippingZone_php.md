# ShippingZone.php

**Path**: `src\Entity\Shipping\ShippingZone.php`

## Summary
The `ShippingZone` entity represents a shipping zone configuration that links geographical zones to shipping methods in an e-commerce system. It maps a named shipping zone (with a unique code) to an `Addressing\Zone`, allowing the system to define which shipping options are available for different geographical regions. This entity is exposed via GraphQL API with filtering capabilities and enforces uniqueness constraints on both code and name fields to prevent duplicate shipping zone configurations.

## Classes
- `ShippingZone`

## Function Details

### `__construct`


### `getId`


### `getCode`


### `setCode`

- **Parameters**: `string $code`

### `getZone`


### `setZone`

- **Parameters**: `?Zone $zone`

### `addMember`

- **Parameters**: `ShippingZoneMember $member`

### `hasMember`

- **Parameters**: `ShippingZoneMember $member`

### `removeMember`

- **Parameters**: `ShippingZoneMember $member`

### `getMembers`


### `__toString`


### `getName`


### `setName`

- **Parameters**: `string $name`

### `getPostCodeList`



# ShippingZoneMember.php

**Path**: `src\Entity\Shipping\ShippingZoneMember.php`

## Summary
The `ShippingZoneMember` entity represents a postcode range membership within a shipping zone, defining geographic coverage through minimum and maximum postcode boundaries. It establishes a many-to-one relationship with `ShippingZone` and enforces uniqueness on postcode ranges to prevent overlapping zone definitions. This entity is exposed via GraphQL API (query operations only) and uses Doctrine ORM for persistence, with validation ensuring postcodes are exactly 5 characters long.

## Classes
- `ShippingZoneMember`

## Function Details

### `getId`


### `getShippingZone`


### `setShippingZone`

- **Parameters**: `?ShippingZone $shippingZone`

### `getPostcodeMin`


### `setPostcodeMin`

- **Parameters**: `?string $postcodeMin`

### `getPostcodeMax`


### `setPostcodeMax`

- **Parameters**: `?string $postcodeMax`


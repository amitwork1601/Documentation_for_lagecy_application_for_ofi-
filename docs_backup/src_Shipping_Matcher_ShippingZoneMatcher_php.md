# ShippingZoneMatcher.php

**Path**: `src\Shipping\Matcher\ShippingZoneMatcher.php`

## Summary
The `ShippingZoneMatcher` class determines the appropriate shipping zone for a given delivery address by matching it against geographical zones and postcode ranges. It leverages Sylius's zone matching to find the base geographical zone, then queries for a shipping zone member that encompasses the address's postcode within that zone, ultimately returning the associated `ShippingZone` or null if no match is found.

## Classes
- `ShippingZoneMatcher`

## Function Details

### `match`

- **Parameters**: `?AddressInterface $address`
- **Description**: @throws \Doctrine\ORM\NonUniqueResultException
/


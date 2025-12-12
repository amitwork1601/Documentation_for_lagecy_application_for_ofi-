# PickupPointRepository.php

**Path**: `src\Repository\PickupPoint\PickupPointRepository.php`

## Summary
This repository class manages database queries for PickupPoint entities in a shipping/delivery system. It provides methods to find pickup points associated with specific shipping methods and to locate pickup points by matching their name and address details (using MD5 hash comparison) along with an external reference identifier. The class extends Sylius ResourceBundle's EntityRepository and is designed to support e-commerce pickup point/click-and-collect functionality.

## Classes
- `PickupPointRepository`

## Function Details

### `findByShippingMethod`

- **Parameters**: `ShippingMethod $shippingMethod`
- **Description**: @return PickupPoint[]

@throws QueryException
/

### `findOneByNameAddress`

- **Parameters**: `PickupPointDto $pickupPointDto, string $commonExternalRef`
- **Description**: @throws NonUniqueResultException
/

### `findOneByShippingMethodAndReference`

- **Parameters**: `ShippingMethod $shippingMethod, string $externalReference`
- **Description**: @throws NonUniqueResultException
/

### `findByShippingMethodAndReferences`

- **Parameters**: `ShippingMethod $shippingMethod, array $externalReferences`

### `findPickupPointToDelete`

- **Parameters**: `ShippingMethod $shippingMethod, array $externalReferences`
- **Description**: @return array&lt;PickupPoint&gt;
/

### `createByShippingMethodQueryBuilder`

- **Parameters**: `ShippingMethod $shippingMethod`

### `findByNearests`

- **Parameters**: `string $lat, string $lng, array $shippingMethods, ?int $radius = 10, ?int $nbResults = 10`

### `createDefaultEnabledQueryBuilder`

- **Parameters**: `?array $shippingMethods, ?int $nbResults = 10`

### `createWeightEnabledQueryBuilder`

- **Parameters**: `?array $shippingMethods, ?float $weight, ?int $nbResults = 10`


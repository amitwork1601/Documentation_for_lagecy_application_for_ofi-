# PickupAddressRepository.php

**Path**: `src\Repository\PickupPoint\PickupAddressRepository.php`

## Summary
This repository class manages database queries for pickup point addresses in a Sylius-based e-commerce application. It extends the base EntityRepository and provides a single query method `findByPickupPoint()` that retrieves all address records associated with a specific pickup point entity, using Doctrine QueryBuilder to filter results by the pickup point relationship.

## Classes
- `PickupAddressRepository`

## Function Details

### `findByPickupPoint`

- **Parameters**: `PickupPoint $pickupPoint`


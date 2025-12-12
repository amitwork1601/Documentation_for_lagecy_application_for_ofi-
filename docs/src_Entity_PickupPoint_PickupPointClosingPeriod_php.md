# PickupPointClosingPeriod.php

**Path**: `src\Entity\PickupPoint\PickupPointClosingPeriod.php`

## Summary
This entity represents scheduled closing periods for pickup points in a shipping/logistics system. It stores start and end dates for when a pickup point is unavailable and maintains a many-to-one relationship with `PickupPointHasShippingMethod` to track which pickup point/shipping method combinations are affected by specific closure dates. The class is exposed via GraphQL API for querying closure schedules, allowing the system to prevent customers from selecting unavailable pickup locations during closed periods.

## Classes
- `PickupPointClosingPeriod`

## Function Details

### `getId`


### `getStartDate`


### `setStartDate`

- **Parameters**: `?\DateTimeInterface $startDate`

### `getEndDate`


### `setEndDate`

- **Parameters**: `?\DateTimeInterface $endDate`

### `getPickupPointShippingMethod`


### `setPickupPointShippingMethod`

- **Parameters**: `?PickupPointHasShippingMethod $pickupPointShippingMethod`


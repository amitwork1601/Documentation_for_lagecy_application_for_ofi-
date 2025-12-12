# ShippingDateBalancerCalendar.php

**Path**: `src\Entity\Shipping\ShippingDateBalancerCalendar.php`

## Summary
The `ShippingDateBalancerCalendar` class is an entity that represents a calendar entry for managing shipping date capacity and availability. It tracks the shipping capacity for a specific date and whether that date is eligible for scheduling shipments, likely used to balance and distribute shipping workload across available dates to prevent overloading specific days.

## Classes
- `ShippingDateBalancerCalendar`

## Function Details

### `getId`


### `setId`

- **Parameters**: `int $id`

### `getDate`


### `setDate`

- **Parameters**: `\DateTime $date`

### `getCapacity`


### `setCapacity`

- **Parameters**: `int $capacity`

### `isEligible`


### `setIsEligible`

- **Parameters**: `bool $isEligible`


# ShippingRangePriceItemRepository.php

**Path**: `src\Repository\ShippingRangePriceItemRepository.php`

## Summary
This repository manages shipping price range items based on zones and price ranges. It provides methods to query shipping prices by finding free shipping options for a given zone and date, and to locate specific shipping price items based on order total, shipping method, and shipping zone with date-based validity checks. The class handles complex business logic for calculating shipping costs within defined price ranges while respecting temporal validity periods.

## Classes
- `ShippingRangePriceItemRepository`

## Function Details

### `findByZoneAndFree`

- **Parameters**: `ZoneInterface $zone, ?ShippingZone $shippingZone, ?\DateTime $applicationDate = null`

### `findOneByMethod`

- **Parameters**: `int $total, ShippingMethodInterface $shippingMethod, ?\DateTime $applicationDate = null, ?ShippingZone $shippingZone = null`

### `findCheapeastByMethod`

- **Parameters**: `ShippingMethodInterface $shippingMethod, ?\DateTime $applicationDate = null, ?ShippingZone $shippingZone = null`

### `createRangePriceByTotalQueryBuilder`

- **Parameters**: `int $total, ?\DateTime $applicationDate = null`


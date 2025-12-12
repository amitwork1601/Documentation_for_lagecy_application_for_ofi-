# ShippingRangePriceRepository.php

**Path**: `src\Repository\ShippingRangePriceRepository.php`

## Summary
This repository manages queries for shipping range prices based on order totals and shipping methods. It provides methods to find applicable shipping prices by matching order totals against defined price ranges, either for a specific shipping method/zone combination or a shipping zone, with optional date-based filtering for price validity periods. The code is part of a Sylius-based e-commerce system's shipping cost calculation functionality.

## Classes
- `ShippingRangePriceRepository`

## Function Details

### `findOneByMethod`

- **Parameters**: `$total, ShippingMethodInterface $shippingMethod, ?\DateTime $applicationDate = null`

### `findOneByShippingZone`

- **Parameters**: `$total, ShippingZone $shippingZone, $shippingMethod, ?\DateTime $applicationDate = null`

### `createRangePriceByTotalQueryBuilder`

- **Parameters**: `int $total, ?\DateTime $applicationDate = null`

### `findByRangePrices`

- **Parameters**: `$rangePrice, ShippingMethod $shippingMethod`

### `findCheapestByMethod`

- **Parameters**: `ShippingMethodInterface $shippingMethod, ?\DateTime $applicationDate = null`

### `findCheapestByMethodAndZone`

- **Parameters**: `ShippingZone $shippingZone, ShippingMethodInterface $shippingMethod, ?\DateTime $applicationDate = null`


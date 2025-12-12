# ShippingRangePriceItem.php

**Path**: `src\Entity\Shipping\ShippingRangePriceItem.php`

## Summary
The `ShippingRangePriceItem` entity represents individual shipping price configurations for specific geographic zones within a range-based pricing system. It stores zone-specific shipping costs (amount) and associates them with a parent `ShippingRangePrice`, allowing the application to define different shipping rates for different delivery zones. The class is exposed via GraphQL API with query capabilities and includes validation constraints to ensure required fields like zone, name, and amount are properly set.

## Classes
- `ShippingRangePriceItem`

## Function Details

### `getId`


### `getShippingRangePrice`


### `setShippingRangePrice`

- **Parameters**: `?ShippingRangePrice $shippingRangePrice`

### `getShippingZone`


### `getZone`


### `setZone`

- **Parameters**: `?Zone $zone`

### `setShippingZone`

- **Parameters**: `?ShippingZone $shippingZone`

### `getName`


### `setName`

- **Parameters**: `string $name`

### `getAmount`


### `setAmount`

- **Parameters**: `int $amount`

### `isEnabled`


### `setEnabled`

- **Parameters**: `bool $enabled`

### `enable`


### `disable`



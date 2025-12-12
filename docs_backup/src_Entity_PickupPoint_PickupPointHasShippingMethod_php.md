# PickupPointHasShippingMethod.php

**Path**: `src\Entity\PickupPoint\PickupPointHasShippingMethod.php`

## Summary
This entity represents a many-to-many relationship between pickup points and shipping methods in an e-commerce system, allowing tracking of which shipping methods are available at specific pickup locations. It includes external reference identification, enabled/disabled status, and manages associated closing periods when pickup points are unavailable for specific shipping methods. The class enforces a unique constraint across pickup point, shipping method, and external reference combinations, and is exposed via GraphQL API with query capabilities.

## Classes
- `PickupPointHasShippingMethod`

## Function Details

### `__construct`


### `getId`


### `getPickupPoint`


### `setPickupPoint`

- **Parameters**: `?PickupPoint $pickupPoint`

### `getShippingMethod`


### `setShippingMethod`

- **Parameters**: `?ShippingMethod $shippingMethod`

### `getExternalReference`


### `setExternalReference`

- **Parameters**: `string $externalReference`

### `isEnabled`


### `setEnabled`

- **Parameters**: `bool $enabled`

### `addClosingPeriod`

- **Parameters**: `PickupPointClosingPeriod $closingPeriod`

### `removeClosingPeriod`

- **Parameters**: `PickupPointClosingPeriod $closingPeriod`

### `getClosingPeriods`


### `hasClosingPeriod`

- **Parameters**: `PickupPointClosingPeriod $closingPeriod`

### `isAvailable`

- **Parameters**: `int $gracePeriod = self::GRACE_PERIOD_IN_DAYS_BEFORE_CLOSING`

### `getWeightLimit`


### `setWeightLimit`

- **Parameters**: `?float $weightLimit`


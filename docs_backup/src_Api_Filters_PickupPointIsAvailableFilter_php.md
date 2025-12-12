# PickupPointIsAvailableFilter.php

**Path**: `src\Api\Filters\PickupPointIsAvailableFilter.php`

## Summary
This API Platform filter enables filtering of pickup points based on their availability status. It checks whether a pickup point is currently available by evaluating its enabled status, associated shipping methods, and closing periods, joining multiple related entities (PickupPointHasShippingMethod, ShippingMethod, and PickupPointClosingPeriod) to determine real-time availability. The filter supports both available and unavailable states through boolean parameter values, allowing API consumers to query only operational pickup points or those that are currently closed.

## Classes
- `PickupPointIsAvailableFilter`

## Function Details

### `supportProperty`

- **Parameters**: `string $property, string $resourceClass, ?Operation $operation = null`

### `getDescription`

- **Parameters**: `string $resourceClass`


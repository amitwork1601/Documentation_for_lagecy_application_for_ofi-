# ShippingMethodFilter.php

**Path**: `src\PickupPoint\Filter\ShippingMethodFilter.php`

## Summary
This API Platform filter class is designed to filter PickupPoint entities based on a specified shipping method. It validates that the requested shipping method is eligible for the current cart/order context and restricts pickup point results to only those compatible with the chosen shipping method's gateway configuration, enabling customers to see only relevant pickup locations for their selected delivery option.

## Classes
- `ShippingMethodFilter`

## Function Details

### `getDescription`

- **Parameters**: `string $resourceClass`


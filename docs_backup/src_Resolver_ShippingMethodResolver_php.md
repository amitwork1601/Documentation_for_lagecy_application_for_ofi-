# ShippingMethodResolver.php

**Path**: `src\Resolver\ShippingMethodResolver.php`

## Summary
The `ShippingMethodResolver` is a decorator for Sylius's shipping methods resolver that filters available shipping methods based on pickup point selections and weight limits. It intercepts shipping method resolution to return only the specific shipping method associated with a selected pickup point on an order, or filters out pickup point methods when in `WITHOUT_PICKUP_SCOPE` mode, while leveraging a weight limit eligibility checker to validate pickup point constraints.

## Classes
- `ShippingMethodResolver`

## Function Details

### `getSupportedMethods`

- **Parameters**: `ShippingSubjectInterface $subject, string $scope = self::DEFAULT_SCOPE`

### `supports`

- **Parameters**: `ShippingSubjectInterface $subject`

### `getShippingMethod`

- **Parameters**: `OrderInterface $order`


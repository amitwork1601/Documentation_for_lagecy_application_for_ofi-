# PickupPointWeightLimitEligibilityChecker.php

**Path**: `src\Checker\PickupPointWeightLimitEligibilityChecker.php`

## Summary
This class determines whether an order is eligible for delivery to a specific pickup point based on weight restrictions. It calculates the order's shipping weight and checks if it falls within the pickup point's weight limit (or if no limit exists), returning true if the order can be delivered to that pickup point, false otherwise.

## Classes
- `PickupPointWeightLimitEligibilityChecker`

## Function Details

### `__construct`

- **Parameters**: `private ShippingWeightProvider $shippingWeightProvider`

### `isEligible`

- **Parameters**: `OrderInterface $order, PickupPointHasShippingMethod $pickupPointHasShippingMethod`


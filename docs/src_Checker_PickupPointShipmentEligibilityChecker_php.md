# PickupPointShipmentEligibilityChecker.php

**Path**: `src\Checker\PickupPointShipmentEligibilityChecker.php`

## Summary
This class determines whether pickup point shipping is available/eligible for a given order or subscription. It iterates through all shipping methods to find pickup point options, then validates eligibility by checking if the shipping method is compatible with the order/subscription's details (including temporarily replacing the shipping address with a pickup address for validation purposes). This is used in an e-commerce context to control when customers can select pickup point delivery based on business rules like location, channel, and order characteristics.

## Classes
- `PickupPointShipmentEligibilityChecker`

## Function Details

### `isEligible`

- **Parameters**: `ChannelAwareInterface|Subscription $object`

### `isShippingMethodEligible`

- **Parameters**: `ChannelAwareInterface|Subscription $object, ShippingMethod $shippingMethod`


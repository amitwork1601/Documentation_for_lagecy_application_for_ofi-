# PickupAddressFactory.php

**Path**: `src\PickupPoint\Factory\PickupAddressFactory.php`

## Summary
The `PickupAddressFactory` class is a factory decorator that creates `PickupAddress` entities, specifically for e-commerce pickup point functionality. Its main purpose is to instantiate pickup addresses either as empty objects via the decorated factory or populate them from a `PickupPoint`, `Customer`, and `ShippingMethod` combination, mapping the pickup point's location details and customer information into a standardized address format for order fulfillment.

## Classes
- `PickupAddressFactory`

## Function Details

### `__construct`

- **Parameters**: `FactoryInterface $decorated`

### `createNew`


### `createFromPickupPoint`

- **Parameters**: `Customer $customer, PickupPoint $pickupPoint, ShippingMethod $shippingMethod`


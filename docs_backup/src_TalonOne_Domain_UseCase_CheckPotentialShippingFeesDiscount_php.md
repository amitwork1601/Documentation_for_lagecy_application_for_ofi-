# CheckPotentialShippingFeesDiscount.php

**Path**: `src\TalonOne\Domain\UseCase\CheckPotentialShippingFeesDiscount.php`

## Summary
This use case class checks if there are potential shipping fee discounts available from TalonOne's promotion engine for a given order and shipping method combination. It performs a dry-run customer session update by simulating the order with predicted shipping costs, then queries TalonOne's API to determine what shipping discounts would apply, returning the discount amount as an integer.

## Classes
- `CheckPotentialShippingFeesDiscount`

## Function Details

### `execute`

- **Parameters**: `Order $order, ShippingMethodInterface $shippingMethod`

### `buildPredictedOrder`

- **Parameters**: `Order $order, ShippingMethodInterface $shippingMethod`


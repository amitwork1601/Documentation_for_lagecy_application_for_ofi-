# SubscriptionAdjustmentProvider.php

**Path**: `src\Subscription\Provider\SubscriptionAdjustmentProvider.php`

## Summary
This class manages subscription-based discount adjustments for order items in an e-commerce system. It creates or updates price adjustments that apply a configurable percentage reduction to order items with subscription pricing, calculating the discounted amount based on the item's unit price and quantity, then applying it as a negative adjustment to reduce the total cost.

## Classes
- `SubscriptionAdjustmentProvider`

## Function Details

### `provideNewSubscriptionAdjustment`

- **Parameters**: `OrderItem $item`

### `provideExistingSubscriptionAdjustement`

- **Parameters**: `OrderItem $item`


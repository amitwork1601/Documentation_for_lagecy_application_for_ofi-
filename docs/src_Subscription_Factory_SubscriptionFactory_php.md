# SubscriptionFactory.php

**Path**: `src\Subscription\Factory\SubscriptionFactory.php`

## Summary
This factory class is responsible for creating `Subscription` entities in a subscription-based e-commerce system. It decorates the base subscription factory to automatically generate unique codes with a configurable prefix, and provides a specialized method to create subscriptions from existing orders by copying billing/shipping addresses, customer details, channel, and shipping method information.

## Classes
- `SubscriptionFactory`

## Function Details

### `createNew`


### `createNewFromOrder`

- **Parameters**: `Order $order`


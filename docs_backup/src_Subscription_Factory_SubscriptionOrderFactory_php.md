# SubscriptionOrderFactory.php

**Path**: `src\Subscription\Factory\SubscriptionOrderFactory.php`

## Summary
The `SubscriptionOrderFactory` class is responsible for creating new subscription orders, either from scratch or by cloning data from an existing subscription's original order. It handles the technical setup of new orders (assigning tokens and order numbers) and transfers subscription items, payment methods, and shipping information from the original order to create recurring subscription orders for subsequent billing cycles.

## Classes
- `SubscriptionOrderFactory`

## Function Details

### `createNew`


### `createNewFromSubscription`

- **Parameters**: `Subscription $subscription`


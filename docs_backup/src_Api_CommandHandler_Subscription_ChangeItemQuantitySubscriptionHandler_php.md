# ChangeItemQuantitySubscriptionHandler.php

**Path**: `src\Api\CommandHandler\Subscription\ChangeItemQuantitySubscriptionHandler.php`

## Summary
This command handler manages the modification of item quantities within active subscriptions in an e-commerce system. It validates and processes requests to change the quantity of a specific subscription item, then propagates those changes to related subscription orders through the message bus. The handler ensures data integrity by verifying the subscription exists and is active, validating the subscription item belongs to that subscription, and coordinating quantity updates across both the subscription template and its associated orders.

## Classes
- `ChangeItemQuantitySubscriptionHandler`

## Function Details

### `__invoke`

- **Parameters**: `ChangeItemQuantitySubscription $command`


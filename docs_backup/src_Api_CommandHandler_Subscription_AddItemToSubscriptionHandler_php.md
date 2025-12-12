# AddItemToSubscriptionHandler.php

**Path**: `src\Api\CommandHandler\Subscription\AddItemToSubscriptionHandler.php`

## Summary
This handler processes commands to add product items to a subscription, managing subscription items by either creating new ones or reusing existing items for the same product variant. It includes logic to optionally spread newly added items onto draft subscription orders, dispatching follow-up commands to synchronize the subscription changes with pending orders.

## Classes
- `AddItemToSubscriptionHandler`

## Function Details

### `__invoke`

- **Parameters**: `AddItemToSubscription $addItemToSubscription`


# DeleteItemToSubscriptionOrderHandler.php

**Path**: `src\Api\CommandHandler\SubscriptionOrder\DeleteItemToSubscriptionOrderHandler.php`

## Summary
This handler processes commands to delete items from a subscription order cart. It validates and removes the specified order item from the subscription order, then checks if the order should transition out of an error state (if all items are now available) after the deletion, which is typical for managing subscription-based shopping carts where item availability may affect order status.

## Classes
- `DeleteItemToSubscriptionOrderHandler`

## Function Details

### `__invoke`

- **Parameters**: `DeleteItemToSubscriptionOrder $command`


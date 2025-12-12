# ChangeItemQuantitySubscriptionOrderHandler.php

**Path**: `src\Api\CommandHandler\SubscriptionOrder\ChangeItemQuantitySubscriptionOrderHandler.php`

## Summary
This handler processes commands to change the quantity of an item in a subscription order cart. It retrieves the order item by ID and token, validates it belongs to the subscription order, then modifies the quantity using an order item quantity modifier while applying a lock to prevent concurrent modifications. After updating the quantity, it marks the item as immutable if the quantity didn't actually change, processes the order to recalculate totals/pricing, and returns the updated cart.

## Classes
- `ChangeItemQuantitySubscriptionOrderHandler`

## Function Details

### `__invoke`

- **Parameters**: `ChangeItemQuantitySubscriptionOrder $command`


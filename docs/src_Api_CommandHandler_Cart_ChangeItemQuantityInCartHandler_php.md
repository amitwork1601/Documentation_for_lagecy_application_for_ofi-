# ChangeItemQuantityInCartHandler.php

**Path**: `src\Api\CommandHandler\Cart\ChangeItemQuantityInCartHandler.php`

## Summary
This command handler manages the modification of item quantities within a shopping cart in an e-commerce system. It retrieves an order item by ID and cart token, validates ownership, acquires a lock to prevent concurrent modifications, then updates the item quantity and reprocesses the order to recalculate totals and shipping options.

## Classes
- `ChangeItemQuantityInCartHandler`

## Function Details

### `__invoke`

- **Parameters**: `ChangeItemQuantityInCart $changeItemQuantityInCart`

### `modifyInterval`

- **Parameters**: `OrderItem $orderItem, ?int $subscriptionInterval`


# AddItemToSubscriptionOrderHandler.php

**Path**: `src\Api\CommandHandler\SubscriptionOrder\AddItemToSubscriptionOrderHandler.php`

## Summary
This command handler adds items to subscription orders in an e-commerce system. It retrieves a subscription order by token, creates and configures an order item with pricing and quantity calculations, applies any relevant upsells, and uses a locking mechanism to ensure thread-safe order modifications during the cart update process.

## Classes
- `AddItemToSubscriptionOrderHandler`

## Function Details

### `__invoke`

- **Parameters**: `AddItemToSubscriptionOrder $command`


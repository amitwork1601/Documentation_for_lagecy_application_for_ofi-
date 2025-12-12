# UpdateShippingSubscriptionOrderHandler.php

**Path**: `src\Api\CommandHandler\SubscriptionOrder\UpdateShippingSubscriptionOrderHandler.php`

## Summary
This handler processes commands to update shipping information for subscription orders in a cart state. It retrieves a subscription order by token, validates it belongs to a customer, creates a shipping DTO from the command data, and delegates the actual update logic to a specialized subscription order updater service. The handler serves as part of a CQRS command/message handling architecture for managing subscription-based order shipping details.

## Classes
- `UpdateShippingSubscriptionOrderHandler`

## Function Details

### `__invoke`

- **Parameters**: `UpdateShippingSubscriptionOrder $command`


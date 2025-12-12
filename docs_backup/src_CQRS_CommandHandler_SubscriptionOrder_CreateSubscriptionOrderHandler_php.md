# CreateSubscriptionOrderHandler.php

**Path**: `src\CQRS\CommandHandler\SubscriptionOrder\CreateSubscriptionOrderHandler.php`

## Summary
This command handler creates new subscription orders from active subscriptions in a CQRS architecture. It validates that the subscription is not in a stopped state before using a factory to generate the subscription order entity, then persists it to the database via Doctrine ORM. The handler throws an exception if attempting to create an order for a stopped subscription, ensuring business rule enforcement at the command processing level.

## Classes
- `CreateSubscriptionOrderHandler`

## Function Details

### `__invoke`

- **Parameters**: `CreateSubscriptionOrder $command`


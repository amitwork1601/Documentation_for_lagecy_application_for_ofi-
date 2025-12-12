# CreateSubscriptionOrderFromSubscriptionHandler.php

**Path**: `src\Api\CommandHandler\SubscriptionOrder\CreateSubscriptionOrderFromSubscriptionHandler.php`

## Summary
This command handler creates a subscription order from an existing subscription by retrieving the subscription via its code and either returning an existing draft order or dispatching a command to create a new one. It validates that the subscription exists and is not in a stopped state before proceeding, throwing exceptions if these conditions aren't met. The handler serves as a bridge between the API layer and the domain layer, ensuring business rules are enforced when generating orders from active subscriptions.

## Classes
- `CreateSubscriptionOrderFromSubscriptionHandler`

## Function Details

### `__invoke`

- **Parameters**: `CreateSubscriptionOrderFromSubscription $command`


# CancelSubscriptionHandler.php

**Path**: `src\Api\CommandHandler\Subscription\CancelSubscriptionHandler.php`

## Summary
This command handler processes subscription cancellation requests by locating a subscription by its code and applying a cancellation transition through a state machine. It updates the subscription's stopped reason and timestamp when the cancellation successfully transitions the subscription to a stopped state, enforcing proper business rules for subscription lifecycle management.

## Classes
- `CancelSubscriptionHandler`

## Function Details

### `__invoke`

- **Parameters**: `CancelSubscription $command`


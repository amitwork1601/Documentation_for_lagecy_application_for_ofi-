# UpdateSubscriptionOrderStateHandler.php

**Path**: `src\CQRS\CommandHandler\SubscriptionOrder\UpdateSubscriptionOrderStateHandler.php`

## Summary
This command handler updates the state of a draft subscription order within a subscription management system. It retrieves a subscription by ID, checks if it has an associated draft order, and if found, dispatches a command to update that draft order's state. The handler serves as a bridge in a CQRS architecture, coordinating between subscription queries and order state management commands to maintain subscription order workflow integrity.

## Classes
- `UpdateSubscriptionOrderStateHandler`

## Function Details

### `__invoke`

- **Parameters**: `UpdateSubscriptionOrderState $command`


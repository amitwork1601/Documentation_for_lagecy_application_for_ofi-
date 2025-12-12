# AbstractSubscriptionCommand.php

**Path**: `src\CQRS\Command\AbstractSubscriptionCommand.php`

## Summary
This abstract base class serves as a foundation for CQRS command objects that operate on subscription entities. It encapsulates a `Subscription` entity as an immutable property and provides read-only access to it, ensuring all subscription-related commands in the system share a consistent structure for passing subscription data through the command bus pattern.

## Classes
- `AbstractSubscriptionCommand`

## Function Details

### `__construct`

- **Parameters**: `private readonly Subscription $subscription`

### `getSubscription`



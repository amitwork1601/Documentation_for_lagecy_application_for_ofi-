# AbstractAsyncSubscriptionCommand.php

**Path**: `src\CQRS\Command\AbstractAsyncSubscriptionCommand.php`

## Summary
This abstract base class serves as a foundation for asynchronous commands related to subscription operations in a CQRS architecture. It encapsulates a Subscription entity and persists its ID separately to ensure the subscription identifier remains accessible even after potential entity detachment during async message processing, which is a common concern when commands are serialized and processed in message queues.

## Classes
- `AbstractAsyncSubscriptionCommand`

## Function Details

### `__construct`

- **Parameters**: `protected Subscription $subscription`

### `getSubscriptionId`



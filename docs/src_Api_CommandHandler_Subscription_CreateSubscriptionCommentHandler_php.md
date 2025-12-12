# CreateSubscriptionCommentHandler.php

**Path**: `src\Api\CommandHandler\Subscription\CreateSubscriptionCommentHandler.php`

## Summary
This command handler creates and attaches comments to subscription entities in a subscription management system. It retrieves a subscription by its code, instantiates a new `SubscriptionComment` entity with the provided message and current user as author, associates it with the subscription, and returns the created comment object. This is part of a CQRS pattern implementation using Symfony Messenger for handling subscription-related operations.

## Classes
- `CreateSubscriptionCommentHandler`

## Function Details

### `__invoke`

- **Parameters**: `CreateSubscriptionComment $command`


# RemoveSubscriptionCommentHandler.php

**Path**: `src\Api\CommandHandler\Subscription\RemoveSubscriptionCommentHandler.php`

## Summary
This command handler removes a comment from a subscription entity in what appears to be a subscription management system. It retrieves a subscription by code and a specific comment by ID, validates that both exist and are associated with each other, then removes the comment from the subscription. The handler is part of a CQRS-style architecture using Symfony Messenger for processing subscription comment deletion operations.

## Classes
- `RemoveSubscriptionCommentHandler`

## Function Details

### `__invoke`

- **Parameters**: `RemoveSubscriptionComment $command`


# UpdateSubscriptionCommentHandler.php

**Path**: `src\Api\CommandHandler\Subscription\UpdateSubscriptionCommentHandler.php`

## Summary
This command handler updates an existing comment on a subscription by finding the subscription and comment by their respective IDs, then modifying the comment's author and message content. It validates that both the subscription and comment exist, throwing exceptions if either is not found, and ensures the comment belongs to the specified subscription before performing the update.

## Classes
- `UpdateSubscriptionCommentHandler`

## Function Details

### `__invoke`

- **Parameters**: `UpdateSubscriptionComment $command`


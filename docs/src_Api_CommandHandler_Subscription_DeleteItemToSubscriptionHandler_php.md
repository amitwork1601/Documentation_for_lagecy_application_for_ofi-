# DeleteItemToSubscriptionHandler.php

**Path**: `src\Api\CommandHandler\Subscription\DeleteItemToSubscriptionHandler.php`

## Summary
This handler processes the deletion of items from an active subscription in a subscription management system. It validates the subscription exists and is active, removes the specified subscription item from the subscription, and optionally removes the corresponding item from the subscription's draft order if the `spreadOnDraft` flag is set. The handler ensures subscription items are properly cleaned up both from the subscription entity and any pending orders associated with it.

## Classes
- `DeleteItemToSubscriptionHandler`

## Function Details

### `__invoke`

- **Parameters**: `DeleteItemToSubscription $deleteItemToSubscription`


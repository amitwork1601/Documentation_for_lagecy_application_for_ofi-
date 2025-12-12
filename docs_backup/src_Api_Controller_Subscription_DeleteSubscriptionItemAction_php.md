# DeleteSubscriptionItemAction.php

**Path**: `src\Api\Controller\Subscription\DeleteSubscriptionItemAction.php`

## Summary
This API controller handles the deletion of individual items from a subscription by validating the subscription code and item ID from the request, then dispatching a `DeleteItemToSubscription` command via the message bus. It performs authorization checks to ensure the subscription and its associated item exist before processing the deletion, throwing appropriate HTTP exceptions (404) when required parameters are missing or entities are not found.

## Classes
- `DeleteSubscriptionItemAction`

## Function Details

### `__invoke`

- **Parameters**: `Request $request`


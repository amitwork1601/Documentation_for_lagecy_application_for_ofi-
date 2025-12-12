# DeleteSubscriptionOrderItemAction.php

**Path**: `src\Api\Controller\SubscriptionOrder\DeleteSubscriptionOrderItemAction.php`

## Summary
This API controller handles the deletion of individual items from a subscription order. It validates that both the order token and item ID are present in the request, verifies the subscription order and order item exist in the database, then dispatches a `DeleteItemToSubscriptionOrder` command via the message bus to perform the actual deletion operation.

## Classes
- `DeleteSubscriptionOrderItemAction`

## Function Details

### `__invoke`

- **Parameters**: `Request $request`


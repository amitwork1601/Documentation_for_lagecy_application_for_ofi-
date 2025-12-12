# DeleteItemToSubscriptionDraftOrderAction.php

**Path**: `src\Api\Controller\Subscription\DeleteItemToSubscriptionDraftOrderAction.php`

## Summary
This controller handles the deletion of items from a subscription's draft order in an e-commerce system. It validates that both the subscription and order item exist, ensures the item belongs to the subscription's draft order, then uses Sylius's `RemoveItemFromCart` command via a message bus to remove the item and returns the updated draft order as JSON.

## Classes
- `DeleteItemToSubscriptionDraftOrderAction`

## Function Details

### `__invoke`

- **Parameters**: `Request $request`


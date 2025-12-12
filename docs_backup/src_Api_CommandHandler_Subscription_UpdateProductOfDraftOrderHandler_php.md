# UpdateProductOfDraftOrderHandler.php

**Path**: `src\Api\CommandHandler\Subscription\UpdateProductOfDraftOrderHandler.php`

## Summary
This command handler manages the process of updating product quantities in a draft subscription order. It validates that the order item belongs to an active subscription's draft order, then dispatches a `ChangeItemQuantitySubscriptionOrder` command to modify the quantity, ensuring the change is consistent with the subscription's product configuration. The handler acts as a coordination layer between subscription management and order item modifications, with validation to prevent invalid updates to non-existent or non-draft orders.

## Classes
- `UpdateProductOfDraftOrderHandler`

## Function Details

### `__invoke`

- **Parameters**: `UpdateProductOfDraftOrder $updateItemOfDraftOrder`


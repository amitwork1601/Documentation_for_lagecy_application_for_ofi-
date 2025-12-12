# UpdateProductOfDraftOrder.php

**Path**: `src\Api\Command\Subscription\UpdateProductOfDraftOrder.php`

## Summary
This is a command object for updating the product quantity of a draft order item within a subscription context. It encapsulates the data needed to modify an order item in a subscription's draft order, specifically tracking which subscription, which order item, and the new quantity to set. The `SubscriptionCodeAware` attribute indicates this command participates in subscription-scoped operations, likely triggering validation or routing based on the subscription code.

## Classes
- `UpdateProductOfDraftOrder`


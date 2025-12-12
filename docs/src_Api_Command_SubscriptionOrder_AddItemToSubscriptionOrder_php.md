# AddItemToSubscriptionOrder.php

**Path**: `src\Api\Command\SubscriptionOrder\AddItemToSubscriptionOrder.php`

## Summary
This is a command class that represents a request to add a product item to a subscription order in an e-commerce system. It encapsulates the necessary data for the operation: the order identifier (token), the product variant to add, the quantity, an optional upsell flag indicating if this is an upsell item, and optional source item tracking information. The `OrderTokenValueAware` attribute suggests this command is used in an API context where orders are identified by tokens rather than user sessions.

## Classes
- `AddItemToSubscriptionOrder`


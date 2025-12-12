# ChangeItemQuantitySubscriptionOrder.php

**Path**: `src\Api\Command\SubscriptionOrder\ChangeItemQuantitySubscriptionOrder.php`

## Summary
This class serves as a command/DTO for modifying the quantity of an item in a subscription order within an e-commerce system built on Sylius. It encapsulates the three required parameters (order token, order item ID, and new quantity) needed to identify and update a specific subscription order item, with built-in validation through Sylius API attributes for token and item ID awareness. The class is designed to be used in a CQRS pattern for handling subscription order item quantity changes in the admin context.

## Classes
- `ChangeItemQuantitySubscriptionOrder`


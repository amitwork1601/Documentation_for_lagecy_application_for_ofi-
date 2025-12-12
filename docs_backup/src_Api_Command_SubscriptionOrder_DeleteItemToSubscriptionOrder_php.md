# DeleteItemToSubscriptionOrder.php

**Path**: `src\Api\Command\SubscriptionOrder\DeleteItemToSubscriptionOrder.php`

## Summary
This class is a command DTO (Data Transfer Object) used to delete an item from a subscription order in an e-commerce system. It carries the order token for identification and the specific OrderItem to be removed, likely as part of a CQRS (Command Query Responsibility Segregation) pattern. The `OrderTokenValueAware` attribute indicates it's integrated with Sylius API Bundle's order token validation system to ensure secure order modifications.

## Classes
- `DeleteItemToSubscriptionOrder`


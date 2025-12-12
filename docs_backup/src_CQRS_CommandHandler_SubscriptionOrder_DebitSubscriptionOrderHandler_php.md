# DebitSubscriptionOrderHandler.php

**Path**: `src\CQRS\CommandHandler\SubscriptionOrder\DebitSubscriptionOrderHandler.php`

## Summary
This command handler processes payment debits for subscription orders in a CQRS architecture. It retrieves a subscription order by its token value from the repository and delegates the payment processing to a specialized payment processor, throwing an exception if the order cannot be found or updated.

## Classes
- `DebitSubscriptionOrderHandler`

## Function Details

### `__invoke`

- **Parameters**: `DebitSubscriptionOrder $command`


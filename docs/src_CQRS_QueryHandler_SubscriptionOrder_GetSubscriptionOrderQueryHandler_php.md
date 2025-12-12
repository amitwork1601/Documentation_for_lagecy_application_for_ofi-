# GetSubscriptionOrderQueryHandler.php

**Path**: `src\CQRS\QueryHandler\SubscriptionOrder\GetSubscriptionOrderQueryHandler.php`

## Summary
This query handler retrieves a subscription order entity from the database using the CQRS pattern. It receives a `GetSubscriptionOrderQuery` containing a subscription order ID, delegates to the `SubscriptionOrderRepository` to fetch the corresponding `Order` entity, and returns it to the caller.

## Classes
- `GetSubscriptionOrderQueryHandler`

## Function Details

### `__construct`

- **Parameters**: `private SubscriptionOrderRepository $subscriptionOrderRepository`

### `__invoke`

- **Parameters**: `GetSubscriptionOrderQuery $query`


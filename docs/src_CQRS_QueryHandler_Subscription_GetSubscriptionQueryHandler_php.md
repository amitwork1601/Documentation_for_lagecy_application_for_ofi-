# GetSubscriptionQueryHandler.php

**Path**: `src\CQRS\QueryHandler\Subscription\GetSubscriptionQueryHandler.php`

## Summary
This query handler retrieves a single Subscription entity from the database using the CQRS pattern. It implements the read-side of CQRS by accepting a GetSubscriptionQuery, extracting the subscription ID from it, and delegating to the SubscriptionRepository to fetch and return the corresponding Subscription entity (or null if not found).

## Classes
- `GetSubscriptionQueryHandler`

## Function Details

### `__invoke`

- **Parameters**: `GetSubscriptionQuery $query`


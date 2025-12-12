# GetPickupPointDailySubscriptionsQueryHandler.php

**Path**: `src\CQRS\QueryHandler\Subscription\GetPickupPointDailySubscriptionsQueryHandler.php`

## Summary
This query handler retrieves active subscriptions scheduled for pickup point delivery on the next available shipping date. It resolves the next business day (skipping holidays) and fetches all active subscriptions with a matching next shipping date from the repository, returning them as an array for processing daily pickup point deliveries.

## Classes
- `GetPickupPointDailySubscriptionsQueryHandler`

## Function Details

### `__invoke`

- **Parameters**: `GetNextShippingSubscriptionsQuery $query`


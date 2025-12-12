# GetSubscriptionQuery.php

**Path**: `src\CQRS\Query\Subscription\GetSubscriptionQuery.php`

## Summary
This is a CQRS query object that encapsulates a request to retrieve a specific subscription by its ID. It implements the QueryInterface as part of the Command Query Responsibility Segregation pattern, serving as a data transfer object that carries the subscription identifier through the query handling layer. This query enables read operations for subscription data without side effects, following CQRS principles of separating read and write operations.

## Classes
- `GetSubscriptionQuery`

## Function Details

### `__construct`

- **Parameters**: `int $subscriptionId`

### `getSubscriptionId`



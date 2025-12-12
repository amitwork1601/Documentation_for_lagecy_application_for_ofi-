# GetSubscriptionOrderQuery.php

**Path**: `src\CQRS\Query\SubscriptionOrder\GetSubscriptionOrderQuery.php`

## Summary
This class represents a CQRS query object used to retrieve a specific subscription order by its ID. It encapsulates the query parameters (subscription order ID) in an immutable, read-only value object that follows the Query pattern, separating read operations from write operations in the application's architecture. The class serves as a data transfer object that handlers can use to fetch subscription order details from the data store.

## Classes
- `GetSubscriptionOrderQuery`

## Function Details

### `__construct`

- **Parameters**: `private int $subscriptionOrderId`

### `getSubscriptionOrderId`



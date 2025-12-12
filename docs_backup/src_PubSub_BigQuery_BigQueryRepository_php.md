# BigQueryRepository.php

**Path**: `src\PubSub\BigQuery\BigQueryRepository.php`

## Summary
The `BigQueryRepository` class provides a data access layer for querying Google BigQuery logs across different business entity types (orders, customers, subscriptions, and promotions). It executes SQL queries against BigQuery tables to retrieve log entries by message ID, then maps the results into strongly-typed DTO objects (OrderLog, CustomerLog, SubscriptionLog, or PromotionLog) based on the specified log type.

## Classes
- `BigQueryRepository`

## Function Details

### `find`

- **Parameters**: `string $messageId, LogsType $type`

### `runQuery`

- **Parameters**: `string $query`

### `findByObjectIdQuery`

- **Parameters**: `?string $objectId, LogsType $type, array $args = []`

### `countByObjectIdQuery`

- **Parameters**: `?string $objectId, LogsType $type, array $args = []`

### `getTable`

- **Parameters**: `LogsType $type`

### `countOrderLogs`

- **Parameters**: `int $orderId, array $args = []`

### `countCustomerLogs`

- **Parameters**: `int $customerId, array $args = []`

### `countSubscriptionLogs`

- **Parameters**: `int $subscriptionId, array $args = []`

### `countPromotionLogs`

- **Parameters**: `int $promotionId, array $args = []`

### `getOrderLogs`

- **Parameters**: `int $orderId, array $args = []`

### `getCustomerLogs`

- **Parameters**: `int $customerId, array $args = []`

### `getSubscriptionLogs`

- **Parameters**: `int $subscriptionId, array $args = []`

### `getPromotionLogs`

- **Parameters**: `int $promotionId, array $args = []`


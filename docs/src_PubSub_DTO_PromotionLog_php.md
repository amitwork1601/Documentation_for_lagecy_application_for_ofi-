# PromotionLog.php

**Path**: `src\PubSub\DTO\PromotionLog.php`

## Summary
This class represents a Data Transfer Object (DTO) for promotion-related Pub/Sub logs, extending a base `PubSubLog` class. It provides API Platform integration with both REST and GraphQL endpoints for querying promotion logs from BigQuery, supporting filtering by promotion ID, date ranges, and pagination parameters. The `createFromBigQueryResult` factory method deserializes BigQuery results into structured PromotionLog objects with message metadata, attributes, and data payload.

## Classes
- `PromotionLog`

## Function Details

### `createFromBigQueryResult`

- **Parameters**: `array $queryResults`

### `getId`



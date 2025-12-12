# OrderLog.php

**Path**: `src\PubSub\DTO\OrderLog.php`

## Summary
The `OrderLog` class is a Data Transfer Object (DTO) that represents order-related logs retrieved from Google Cloud Pub/Sub and BigQuery. It extends `PubSubLog` and serves as an API Platform resource exposing both REST (Get operation) and GraphQL endpoints (single item and collection queries) for querying order logs with filtering capabilities by order ID, date range, and pagination parameters. The class includes a factory method to transform BigQuery result rows into `OrderLog` instances for consumption by the application's API layer.

## Classes
- `OrderLog`

## Function Details

### `createFromBigQueryResult`

- **Parameters**: `array $queryResults`

### `getId`


### `getOrderId`



# CustomerLog.php

**Path**: `src\PubSub\DTO\CustomerLog.php`

## Summary
The `CustomerLog` class is a Data Transfer Object (DTO) that represents customer-specific Google Cloud Pub/Sub message logs, extending a base `PubSubLog` class. It exposes both REST API and GraphQL endpoints through ApiPlatform to query and retrieve customer logs with filtering capabilities (by customer ID, date range) and pagination support, using `PubSubLogsProvider` as the data source. The class includes a factory method to transform BigQuery query results into strongly-typed `CustomerLog` objects containing message metadata (ID, publish time, attributes, and data payload).

## Classes
- `CustomerLog`

## Function Details

### `createFromBigQueryResult`

- **Parameters**: `array $queryResults`

### `getId`


### `getCustomerId`



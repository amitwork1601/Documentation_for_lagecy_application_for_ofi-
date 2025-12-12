# SubscriptionLog.php

**Path**: `src\PubSub\DTO\SubscriptionLog.php`

## Summary
The `SubscriptionLog` class is a Data Transfer Object (DTO) that represents log entries for Google Cloud Pub/Sub subscriptions, exposing them through a GraphQL API using ApiPlatform. It provides querying capabilities with filtering by subscription ID, date range, and pagination parameters, and includes a factory method to transform BigQuery query results into `SubscriptionLog` objects for analyzing message delivery history and debugging subscription behavior.

## Classes
- `SubscriptionLog`

## Function Details

### `createFromBigQueryResult`

- **Parameters**: `array $queryResults`

### `getId`


### `getSubscriptionId`



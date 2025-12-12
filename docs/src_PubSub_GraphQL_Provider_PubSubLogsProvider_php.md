# PubSubLogsProvider.php

**Path**: `src\PubSub\GraphQL\Provider\PubSubLogsProvider.php`

## Summary
This provider class serves as a data source adapter for API Platform, enabling GraphQL queries to retrieve PubSub logs (orders, customers, subscriptions, promotions) stored in BigQuery. It implements the ProviderInterface to handle both single entity retrieval (Get operations) and paginated collection queries (QueryCollection operations), routing requests to the appropriate BigQueryRepository methods based on the log type and returning either individual log DTOs or paginated results using BigQueryPaginator.

## Classes
- `PubSubLogsProvider`

## Function Details

### `__construct`

- **Parameters**: `private BigQueryRepository $bigQueryRepository`

### `provide`

- **Parameters**: `Operation $operation, array $uriVariables = [], array $context = []`


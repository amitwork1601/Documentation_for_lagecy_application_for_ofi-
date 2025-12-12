# CollectionProvider.php

**Path**: `src\Api\StateProvider\Admin\SubscriptionMonitoringDto\CollectionProvider.php`

## Summary
This class is an API Platform state provider that retrieves and transforms subscription monitoring data into DTOs for admin API endpoints. It queries `SubscriptionMonitoring` entities within an optional date range, converts them to `SubscriptionMonitoringDto` objects, and returns paginated results using `ArrayPaginator`. The provider serves as the data layer for exposing subscription monitoring metrics and statistics to administrators through the API.

## Classes
- `CollectionProvider`

## Function Details

### `provide`

- **Parameters**: `Operation $operation, array $uriVariables = [], array $context = []`


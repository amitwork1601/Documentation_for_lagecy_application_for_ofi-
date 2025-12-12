# CollectionProvider.php

**Path**: `src\Api\StateProvider\Common\SubscriptionStopReason\CollectionProvider.php`

## Summary
This API Platform state provider retrieves a paginated collection of non-deleted `SubscriptionStopReason` entities from the database. It handles pagination by extracting page and itemsPerPage parameters from the request context (defaulting to page 1 and 30 items per page), filters out deleted records, and returns the results for API collection endpoints.

## Classes
- `CollectionProvider`

## Function Details

### `provide`

- **Parameters**: `Operation $operation, array $uriVariables = [], array $context = []`


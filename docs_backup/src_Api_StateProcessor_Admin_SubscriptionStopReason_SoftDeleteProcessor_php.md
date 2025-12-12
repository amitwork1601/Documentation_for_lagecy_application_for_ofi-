# SoftDeleteProcessor.php

**Path**: `src\Api\StateProcessor\Admin\SubscriptionStopReason\SoftDeleteProcessor.php`

## Summary
This API Platform state processor implements soft deletion for `SubscriptionStopReason` entities in the admin context. Instead of physically removing subscription stop reason records from the database when a DELETE operation is performed, it marks them as deleted by setting a `deleted` flag to true, then persists the entity through Doctrine ORM, allowing for data retention and potential recovery while hiding the records from normal queries.

## Classes
- `SoftDeleteProcessor`

## Function Details

### `process`

- **Parameters**: `mixed $data, Operation $operation, array $uriVariables = [], array $context = []`


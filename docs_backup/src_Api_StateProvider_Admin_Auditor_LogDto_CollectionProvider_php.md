# CollectionProvider.php

**Path**: `src\Api\StateProvider\Admin\Auditor\LogDto\CollectionProvider.php`

## Summary
This is an API Platform state provider that retrieves and paginates audit log entries for administrative purposes. It fetches audit records from a Doctrine-based auditor system, applying filters for entity type, timestamp, user, and other criteria, then returns paginated results suitable for GraphQL or REST API consumption. The provider serves as the data source layer for querying historical changes tracked by the DH\Auditor library.

## Classes
- `CollectionProvider`

## Function Details

### `provide`

- **Parameters**: `Operation $operation, array $uriVariables = [], array $context = []`

### `getEntityNamespace`

- **Parameters**: `string $entity`


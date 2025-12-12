# RemovedOperationResourceMetadataCollectionFactory.php

**Path**: `src\Api\Metadata\Resource\Factory\RemovedOperationResourceMetadataCollectionFactory.php`

## Summary
This factory decorator removes specific API Platform operations from resource metadata collections based on a configured list of operations to remove. It decorates the API Platform metadata collection factory, iterating through all operations in each resource and removing any operations whose names match entries in the `sylius_api.operations_to_remove` parameter. This enables selective disabling of API endpoints (like GET, POST, DELETE) for Sylius API resources without modifying the resource classes themselves.

## Classes
- `RemovedOperationResourceMetadataCollectionFactory`

## Function Details

### `create`

- **Parameters**: `string $resourceClass`
- **Description**: {@inheritdoc}
/


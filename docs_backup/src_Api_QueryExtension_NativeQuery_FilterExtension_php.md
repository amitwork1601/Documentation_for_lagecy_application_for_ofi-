# FilterExtension.php

**Path**: `src\Api\QueryExtension\NativeQuery\FilterExtension.php`

## Summary
The `FilterExtension` class is an API Platform query extension that applies filters to Doctrine ORM collection queries, with special handling for native SQL queries. It processes filters defined on API resources, distinguishing between standard Doctrine filters and custom native query filters (implementing `NativeFilterInterface`), and ensures `OrderFilter` is applied last to prevent LEFT JOIN issues. The extension integrates with API Platform's filter system to modify query builders based on operation-specific filter configurations.

## Classes
- `FilterExtension`

## Function Details

### `applyToCollection`

- **Parameters**: `QueryBuilder $queryBuilder, QueryNameGeneratorInterface $queryNameGenerator, ?string $resourceClass = null, ?Operation $operation = null, array $context = []`


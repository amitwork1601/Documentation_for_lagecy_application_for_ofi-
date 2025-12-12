# CollectionExtensionInterface.php

**Path**: `src\Api\QueryExtension\NativeQuery\CollectionExtensionInterface.php`

## Summary
This interface defines a contract for query extensions that can modify both native SQL queries and Doctrine QueryBuilder instances for collection operations in an API Platform context. It provides two methods to apply custom query modifications: one for native queries (`applyToCollectionFromNativeQuery`) and one for standard Doctrine queries (`applyToCollection`), allowing implementations to consistently enhance data retrieval logic across different query types with context-aware filtering, sorting, or other query manipulations.

## Function Details

### `applyToCollectionFromNativeQuery`

- **Parameters**: `NativeQuery $nativeQuery, QueryNameGeneratorInterface $queryNameGenerator, ?string $resourceClass = null, ?Operation $operation = null, array $context = []`

### `applyToCollection`

- **Parameters**: `QueryBuilder $queryBuilder, QueryNameGeneratorInterface $queryNameGenerator, string $resourceClass, ?Operation $operation = null, array $context = []`


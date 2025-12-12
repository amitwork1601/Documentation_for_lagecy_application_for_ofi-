# SortFilter.php

**Path**: `src\Api\Filters\SortFilter.php`

## Summary
The `SortFilter` class is an API Platform filter that enables sorting/ordering of query results for API endpoints. It supports both standard Doctrine ORM queries and native SQL queries, allowing clients to specify sort order via URL parameters (defaulting to 'order' parameter) while handling edge cases like NULL value comparisons and property name conversion.

## Classes
- `SortFilter`

## Function Details

### `filterPropertyNativeQuery`

- **Parameters**: `string $property, mixed $value, NativeQuery $nativeQuery, QueryNameGeneratorInterface $queryNameGenerator, string $resourceClass, ?Operation $operation = null, array $context = []`

### `supportProperty`

- **Parameters**: `string $property, string $resourceClass, ?Operation $operation = null`

### `filterProperty`

- **Parameters**: `string $property, $value, QueryBuilder $queryBuilder, QueryNameGeneratorInterface $queryNameGenerator, string $resourceClass, ?Operation $operation = null, array $context = []`


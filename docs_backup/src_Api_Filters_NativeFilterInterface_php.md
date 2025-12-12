# NativeFilterInterface.php

**Path**: `src\Api\Filters\NativeFilterInterface.php`

## Summary
This interface extends ApiPlatform's FilterInterface to define a contract for filters that can be applied to native SQL queries (as opposed to Doctrine ORM QueryBuilder). It requires implementing classes to provide an `applyOnNativeQuery()` method that modifies a `NativeQuery` object, enabling the application of API filtering logic directly on raw SQL queries while maintaining compatibility with ApiPlatform's filtering system.

## Function Details

### `applyOnNativeQuery`

- **Parameters**: `NativeQuery $nativeQuery, QueryNameGeneratorInterface $queryNameGenerator, string $resourceClass, ?Operation $operation = null, array $context = []`


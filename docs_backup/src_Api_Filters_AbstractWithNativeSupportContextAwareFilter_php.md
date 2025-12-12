# AbstractWithNativeSupportContextAwareFilter.php

**Path**: `src\Api\Filters\AbstractWithNativeSupportContextAwareFilter.php`

## Summary
This abstract class provides a base implementation for API Platform filters that support both Doctrine ORM and native SQL queries. It processes filter parameters from the request context and delegates the actual filtering logic to concrete implementations through abstract methods (`supportProperty` and `filterPropertyNativeQuery`), enabling custom filters to work seamlessly with native database queries in addition to standard ORM queries.

## Classes
- `AbstractWithNativeSupportContextAwareFilter`

## Function Details

### `supportProperty`

- **Parameters**: `string $property, string $resourceClass, ?Operation $operation = null`

### `filterPropertyNativeQuery`

- **Parameters**: `string $property, mixed $value, NativeQuery $nativeQuery, QueryNameGeneratorInterface $queryNameGenerator, string $resourceClass, ?Operation $operation = null, array $context = []`


# CustomerGenericFilter.php

**Path**: `src\Api\Filters\CustomerGenericFilter.php`

## Summary
This class implements a generic search filter for Customer entities in an API Platform application. It enables searching customers by either their full name and email (using a LIKE pattern match on concatenated fields) or by their exact ID, supporting both standard Doctrine QueryBuilder and native SQL queries through the `AbstractWithNativeSupportContextAwareFilter` base class.

## Classes
- `CustomerGenericFilter`

## Function Details

### `supportProperty`

- **Parameters**: `string $property, string $resourceClass, ?Operation $operation = null`

### `getDescription`

- **Parameters**: `string $resourceClass`


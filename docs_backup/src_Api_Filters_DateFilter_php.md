# DateFilter.php

**Path**: `src\Api\Filters\DateFilter.php`

## Summary
The `DateFilter` class is an API Platform filter that enables filtering of date/datetime fields in API queries using Doctrine ORM. It supports various date comparison operations (before, after, between, etc.) on both simple and nested entity properties, handling multiple Doctrine date types (mutable/immutable dates, datetimes, and times) and includes support for native SQL queries through custom traits.

## Classes
- `DateFilter`

## Function Details

### `supportProperty`

- **Parameters**: `string $property, string $resourceClass, ?Operation $operation = null`


# BooleanFilter.php

**Path**: `src\Api\Filters\BooleanFilter.php`

## Summary
The `BooleanFilter` class is an API Platform filter that enables filtering of API resources by boolean properties in database queries. It validates that the requested property is enabled, mapped, and of boolean type, then applies WHERE conditions to either standard Doctrine ORM QueryBuilder queries or native SQL queries, supporting both simple and nested (joined) properties. This filter allows API consumers to filter collection endpoints by true/false values (e.g., `/users?isActive=true`).

## Classes
- `BooleanFilter`

## Function Details

### `supportProperty`

- **Parameters**: `string $property, string $resourceClass, ?Operation $operation = null`


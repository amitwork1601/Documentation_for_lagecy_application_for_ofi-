# RangeFilter.php

**Path**: `src\Api\Filters\RangeFilter.php`

## Summary
This class implements a range filter for API Platform that enables filtering resources by numeric or date ranges (e.g., price between $10-$50, dates after/before a specific time). It extends AbstractWithNativeSupportContextAwareFilter to support both standard Doctrine ORM queries and native SQL queries, handling nested properties through automatic JOIN generation and applying range operators (like greater than, less than, between) to filter query results.

## Classes
- `RangeFilter`

## Function Details

### `supportProperty`

- **Parameters**: `string $property, string $resourceClass, ?Operation $operation = null`


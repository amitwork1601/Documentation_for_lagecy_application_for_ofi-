# OrderGenericFilter.php

**Path**: `src\Api\Filters\OrderGenericFilter.php`

## Summary
This filter class enables generic search functionality for Order entities in an API Platform context, allowing users to search orders using a single search term across multiple fields. It searches by order token, order number, order ID, customer information (concatenated first name, last name, and email), and customer ID using a flexible LIKE or exact match query pattern.

## Classes
- `OrderGenericFilter`

## Function Details

### `supportProperty`

- **Parameters**: `string $property, string $resourceClass, ?Operation $operation = null`

### `getDescription`

- **Parameters**: `string $resourceClass`


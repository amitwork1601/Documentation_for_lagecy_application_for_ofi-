# ProductGenericFilter.php

**Path**: `src\Api\Filters\ProductGenericFilter.php`

## Summary
This filter implements a generic search functionality for Product entities in an e-commerce system, allowing users to search across multiple related fields simultaneously. When the 'genericFilter' parameter is provided, it performs a case-insensitive LIKE search across the product's code, translated product names, and product variant logistic codes. It extends a custom abstract filter class that supports both ORM QueryBuilder and native SQL queries through Doctrine.

## Classes
- `ProductGenericFilter`

## Function Details

### `supportProperty`

- **Parameters**: `string $property, string $resourceClass, ?Operation $operation = null`

### `getDescription`

- **Parameters**: `string $resourceClass`


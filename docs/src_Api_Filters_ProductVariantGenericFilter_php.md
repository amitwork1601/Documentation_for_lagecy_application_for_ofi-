# ProductVariantGenericFilter.php

**Path**: `src\Api\Filters\ProductVariantGenericFilter.php`

## Summary
This class implements a generic search filter for ProductVariant entities in an API Platform application. It enables searching across multiple fields simultaneously - specifically the variant's code, logistic code, and the product's translated name - by performing a LIKE query with the provided search term across all three properties joined via OR conditions.

## Classes
- `ProductVariantGenericFilter`

## Function Details

### `supportProperty`

- **Parameters**: `string $property, string $resourceClass, ?Operation $operation = null`

### `getDescription`

- **Parameters**: `string $resourceClass`


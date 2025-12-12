# GetProductVariantQuery.php

**Path**: `src\CQRS\Query\ProductVariant\GetProductVariantQuery.php`

## Summary
This is a CQRS query object that encapsulates a request to retrieve a specific product variant by its ID. It serves as a read-only data transfer object in the query side of the CQRS pattern, containing the product variant identifier needed to fetch product variant details from the data store. The class is immutable (readonly) and implements the QueryInterface, ensuring type safety and consistency in the query handling system.

## Classes
- `GetProductVariantQuery`

## Function Details

### `getProductVariantId`



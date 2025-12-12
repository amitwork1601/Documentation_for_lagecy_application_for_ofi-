# GetProductVariantQueryHandler.php

**Path**: `src\CQRS\QueryHandler\ProductVariant\GetProductVariantQueryHandler.php`

## Summary
This is a CQRS query handler that retrieves a single ProductVariant entity from the database based on its ID. It implements the query-side of the CQRS pattern by accepting a GetProductVariantQuery object and delegating to the ProductVariantRepository to fetch and return the requested product variant, or null if not found.

## Classes
- `GetProductVariantQueryHandler`

## Function Details

### `__invoke`

- **Parameters**: `GetProductVariantQuery $query`


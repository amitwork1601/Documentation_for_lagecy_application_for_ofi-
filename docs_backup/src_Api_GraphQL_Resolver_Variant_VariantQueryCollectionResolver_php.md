# VariantQueryCollectionResolver.php

**Path**: `src\Api\GraphQL\Resolver\Variant\VariantQueryCollectionResolver.php`

## Summary
This GraphQL resolver retrieves a paginated collection of product variants filtered by order token, product ID, and search criteria. It validates the order exists, extracts variant IDs from order items, and queries the product variant repository to return a filtered, paginated result set for GraphQL queries related to variants in a Sylius e-commerce context.

## Classes
- `VariantQueryCollectionResolver`

## Function Details

### `__invoke`

- **Parameters**: `iterable $collection, array $context`


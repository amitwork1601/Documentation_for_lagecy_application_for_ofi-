# AuditorPaginator.php

**Path**: `src\Api\GraphQL\Paginator\AuditorPaginator.php`

## Summary
This class is a custom pagination wrapper for auditor-related data in the GraphQL API layer. It adapts an array-based pagination structure (with results, page numbers, and counts) into an ApiPlatform-compatible `PaginatorInterface`, allowing auditor queries to work seamlessly with the framework's pagination system while maintaining iterator functionality for traversing results.

## Classes
- `AuditorPaginator`

## Function Details

### `__construct`

- **Parameters**: `array $auditorPagination`

### `getIterator`


### `count`


### `getLastPage`


### `getTotalItems`


### `getCurrentPage`


### `getItemsPerPage`



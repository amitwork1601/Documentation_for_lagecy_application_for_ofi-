# BigQueryPaginator.php

**Path**: `src\PubSub\BigQuery\BigQueryPaginator.php`

## Summary
This class implements a pagination wrapper for BigQuery result sets, providing API Platform-compatible pagination functionality. It encapsulates paginated data from BigQuery queries and exposes standard pagination metadata (current page, items per page, total items, last page) while implementing both `PaginatorInterface` and `HasNextPagePaginatorInterface` to integrate with API Platform's state management system. The class makes BigQuery results iterable and countable, enabling consistent pagination behavior across API endpoints that query BigQuery data sources.

## Classes
- `BigQueryPaginator`

## Function Details

### `__construct`

- **Parameters**: `private readonly iterable $traversable, private readonly float $currentPage, private readonly float $itemsPerPage, private readonly float $totalItems`

### `count`


### `hasNextPage`


### `getIterator`


### `getCurrentPage`


### `getLastPage`


### `getItemsPerPage`


### `getTotalItems`



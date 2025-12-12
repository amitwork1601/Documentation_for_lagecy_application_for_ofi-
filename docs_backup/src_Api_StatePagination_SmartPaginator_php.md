# SmartPaginator.php

**Path**: `src\Api\StatePagination\SmartPaginator.php`

## Summary
The `SmartPaginator` class implements a custom pagination solution for API Platform that optimizes database queries by separating data selection from population. It uses a two-query strategy where a lightweight selection query retrieves IDs/keys with pagination limits, then an optional populate query efficiently fetches full entity data by joining against the selection subquery, avoiding the performance issues of traditional offset-based pagination on large datasets.

## Classes
- `SmartPaginator`

## Function Details

### `getIterator`


### `count`

- **Description**: @throws NonUniqueResultException
@throws NoResultException
/

### `buildCountQuery`


### `getLastPage`

- **Description**: @throws NonUniqueResultException
@throws NoResultException
/

### `getTotalItems`

- **Description**: @throws NonUniqueResultException
@throws NoResultException
/

### `getCurrentPage`


### `getItemsPerPage`



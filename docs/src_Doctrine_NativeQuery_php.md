# NativeQuery.php

**Path**: `src\Doctrine\NativeQuery.php`

## Summary
The `NativeQuery` class is a query builder wrapper for Doctrine that constructs and executes native SQL queries while maintaining entity mappings. It provides a fluent interface for building SQL queries with methods like `select()`, `from()`, `join()`, and `criteria()`, then converts them into Doctrine native queries with proper result set mapping to hydrate entities or scalar results. This abstraction layer simplifies raw SQL query construction in a Symfony/API Platform application while preserving Doctrine's ORM capabilities for complex database operations that may require native SQL optimization.

## Classes
- `NativeQuery`

## Function Details

### `getEntityManager`


### `select`

- **Parameters**: `$fields`

### `addSelect`

- **Parameters**: `string $field`

### `addSelectDistinct`

- **Parameters**: `bool $distinct`

### `count`


### `from`

- **Parameters**: `$className, $alias = 'o'`

### `innerJoin`

- **Parameters**: `$className, $alias, $on, $parentProperty`

### `leftJoinTable`

- **Parameters**: `$className, $alias, $on, $parentProperty, $tableName`

### `leftJoin`

- **Parameters**: `$className, $alias, $on, $parentProperty`

### `where`

- **Parameters**: `array $criteria`

### `andWhere`

- **Parameters**: `array $criterion`

### `orderBy`

- **Parameters**: `array $ordersBy`

### `addOrderBy`

- **Parameters**: `string $field, string $order = 'ASC'`

### `groupBy`

- **Parameters**: `array $groupsBy`

### `addGroupBy`

- **Parameters**: `string $field`

### `having`

- **Parameters**: `array $having`

### `addHaving`

- **Parameters**: `string $having`

### `addSelectMax`

- **Parameters**: `string $column, string $alias`

### `setFirstResult`

- **Parameters**: `?int $skip = null`

### `setMaxResults`

- **Parameters**: `?int $limit = null`

### `getRootAlias`


### `getAliasJoin`

- **Parameters**: `array $array`

### `getOrderByPart`


### `execute`

- **Parameters**: `mixed $hydrationMode = null`
- **Description**: Gets one-dimensional array of results for the query.

Alias for execute(null, HYDRATE_SCALAR_COLUMN).

@return mixed[]
/

### `toIterable`

- **Parameters**: `iterable $parameters = [], int|string|null $hydrationMode = null`
- **Description**: Executes the query and returns an iterable that can be used to incrementally
iterate over the result.

@param ArrayCollection|array $parameters    the query parameters
@param int|string|null       $hydrationMode the hydration mode to use

@psalm-param ArrayCollection&lt;int, Parameter&gt;|mixed[] $parameters
@psalm-param string|AbstractQuery::HYDRATE_*|null    $hydrationMode

@return iterable&lt;mixed&gt;
/

### `getResult`


### `getSingleColumnResult`


### `getScalarResult`

- **Description**: Gets the scalar results for the query.

Alias for execute(HYDRATE_SCALAR).

@return mixed[]
/

### `getSingleResult`

- **Parameters**: `int|string|null $hydrationMode = null`
- **Description**: Gets the single result of the query.

Enforces the presence as well as the uniqueness of the result.

If the result is not unique, a NonUniqueResultException is thrown.
If there is no result, a NoResultException is thrown.

@psalm-param string|AbstractQuery::HYDRATE_*|null $hydrationMode

@throws NonUniqueResultException if the query result is not unique
@throws NoResultException        if the query returned no result
/

### `getSingleScalarResult`

- **Description**: Gets the single scalar result of the query.

Alias for getSingleResult(HYDRATE_SINGLE_SCALAR).

@return mixed the scalar result

@throws NoResultException        if the query returned no result
@throws NonUniqueResultException if the query result is not unique
/

### `__toString`


### `createDoctrineNativeQuery`


### `findJoinPartByAlias`

- **Parameters**: `string $alias`

### `resolveQuery`

- **Parameters**: `?ResultSetMappingBuilder $rsm = null`

### `resolveWherePart`

- **Parameters**: `array $criteria, array &$detectedAlias = [], $mode = 'AND'`

### `resolveAliasesField`

- **Parameters**: `string $field, array &$detectedAlias = []`

### `resolveAlias`

- **Parameters**: `string $alias`

### `reverseAlias`

- **Parameters**: `string $alias`

### `generateAliasFromClassname`

- **Parameters**: `string $fqcn`


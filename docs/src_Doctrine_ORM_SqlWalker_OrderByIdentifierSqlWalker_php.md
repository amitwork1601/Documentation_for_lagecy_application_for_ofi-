# OrderByIdentifierSqlWalker.php

**Path**: `src\Doctrine\ORM\SqlWalker\OrderByIdentifierSqlWalker.php`

## Summary
This custom Doctrine SQL walker automatically appends entity identifier fields to the ORDER BY clause of DQL queries when no ordering is specified for the main query alias. Its primary purpose is to ensure deterministic query results by guaranteeing consistent ordering based on primary key(s), which is particularly important for pagination and result set stability. The walker intelligently handles both simple and composite primary keys, and avoids adding redundant ordering when the query already orders by the entity's identifier fields.

## Classes
- `OrderByIdentifierSqlWalker`

## Function Details

### `walkSelectStatement`

- **Parameters**: `SelectStatement $AST`

### `appendOrderByIdentifiers`

- **Parameters**: `SelectStatement $ast, string $dqlAlias`

### `hasOrderByOnDqlAlias`

- **Parameters**: `OrderByClause $orderByClause, string $dqlAlias`

### `createOrderByItem`

- **Parameters**: `string $dqlAlias, string $fieldName`

### `getDqlAlias`

- **Description**: @see https://www.doctrine-project.org/projects/doctrine-orm/en/2.13/cookbook/dql-custom-walkers.html#extending-dql-in-doctrine-orm-custom-ast-walkers
/

### `isOrderByIdentifierAllowed`

- **Parameters**: `SelectStatement $ast`


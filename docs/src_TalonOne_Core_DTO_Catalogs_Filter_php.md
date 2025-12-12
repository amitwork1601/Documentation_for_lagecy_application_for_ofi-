# Filter.php

**Path**: `src\TalonOne\Core\DTO\Catalogs\Filter.php`

## Summary
This class represents a filter criterion for querying the Talon.One promotion engine's catalog API, encapsulating an attribute name, comparison operator, and value. It validates that comparison operators (EQ, LT, LE, GT, GE, IN) are appropriate for the value type, restricting numeric operators (LT, LE, GT, GE) to non-string values while allowing equality and set membership operators for all types. The class is designed for serialization in Talon.One API integration contexts, as indicated by the serialization groups.

## Classes
- `Filter`

## Function Details

### `__construct`

- **Parameters**: `string $attr, string $op, mixed $value`

### `isValidOperator`

- **Parameters**: `string $operator, mixed $value`
- **Description**: // EQ: Equal to value
// LT: Less than value
// LE: Less than or equal to value
// GT: Greater than value
// GE: Greater than or equal to value
// IN: One of the comma-separated values that value is set to.
Note: GE, LE, GT, LT are for numeric values only.
/


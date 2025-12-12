# DateFunction.php

**Path**: `src\Doctrine\DateFunction.php`

## Summary
This class implements a custom Doctrine DQL (Doctrine Query Language) function that allows the use of SQL's `DATE()` function within object-oriented queries. It extends Doctrine's FunctionNode to parse and translate DQL `DATE()` calls into native SQL `DATE()` functions, enabling developers to extract just the date portion from datetime fields when querying entities.

## Classes
- `DateFunction`

## Function Details

### `parse`

- **Parameters**: `Parser $parser`

### `getSql`

- **Parameters**: `SqlWalker $sqlWalker`


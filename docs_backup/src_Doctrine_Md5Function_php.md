# Md5Function.php

**Path**: `src\Doctrine\Md5Function.php`

## Summary
This class implements a custom Doctrine DQL (Doctrine Query Language) function that enables the use of MD5 hashing within database queries. It extends Doctrine's `FunctionNode` to parse `MD5()` function calls in DQL and translates them to the appropriate database-specific MD5 expression using the platform's native SQL syntax, allowing developers to hash string values directly in their ORM queries rather than in PHP code.

## Classes
- `Md5Function`

## Function Details

### `getSql`

- **Parameters**: `SqlWalker $sqlWalker`

### `parse`

- **Parameters**: `Parser $parser`


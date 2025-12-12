# TalonOneCriticalException.php

**Path**: `src\TalonOne\Core\Exception\TalonOneCriticalException.php`

## Summary
This class defines a custom critical exception type for the TalonOne integration system. It extends PHP's base Exception class and implements the TalonOneTechnicalException interface, serving as a marker for severe technical errors that occur during TalonOne API operations or processing. The exception allows proper categorization and handling of critical failures separately from other exception types in the TalonOne integration layer.

## Classes
- `TalonOneCriticalException`

## Function Details

### `__construct`

- **Parameters**: `string $message = '', int $code = 0, ?\Throwable $previous = null`


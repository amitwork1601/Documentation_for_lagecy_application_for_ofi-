# ManagementClientException.php

**Path**: `src\TalonOne\Core\Exception\ManagementClientException.php`

## Summary
The `ManagementClientException` class is a custom exception type specifically designed for handling errors that occur within the TalonOne management client operations. It extends PHP's base `Exception` class and implements the `TalonOneTechnicalException` interface to categorize it as a technical (non-business) error related to TalonOne API management interactions. This exception serves as a dedicated error handling mechanism for management-level operations in the TalonOne integration, allowing for specific catch blocks and error handling strategies for management client failures.

## Classes
- `ManagementClientException`

## Function Details

### `__construct`

- **Parameters**: `string $message = '', int $code = 0, ?\Throwable $previous = null`


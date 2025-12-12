# IntegrationClientException.php

**Path**: `src\TalonOne\Core\Exception\IntegrationClientException.php`

## Summary
This class defines a custom exception type for handling errors that occur within the TalonOne integration client layer. It extends PHP's base Exception class and implements the TalonOneTechnicalException marker interface, allowing the application to distinguish and handle TalonOne integration-related technical failures (such as API communication errors, configuration issues, or data transformation problems) separately from business logic exceptions.

## Classes
- `IntegrationClientException`

## Function Details

### `__construct`

- **Parameters**: `string $message = '', int $code = 0, ?\Throwable $previous = null`


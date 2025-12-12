# ErrorNotificationException.php

**Path**: `src\TalonOne\Domain\Exception\ErrorNotificationException.php`

## Summary
This is a custom exception class for handling error notifications within the TalonOne integration domain. It extends PHP's base Exception class and implements a TalonOneException marker interface, allowing the application to catch and handle TalonOne-specific error notification scenarios separately from other exceptions. The class serves as a domain-specific error type for signaling when error notifications occur during TalonOne operations.

## Classes
- `ErrorNotificationException`

## Function Details

### `__construct`

- **Parameters**: `string $message`


# TalonOneApiException.php

**Path**: `src\TalonOne\Domain\Exception\TalonOneApiException.php`

## Summary
This file defines a custom exception class for handling API-related errors when integrating with the TalonOne loyalty and promotion platform. It extends PHP's base Exception class and implements a TalonOneException marker interface, allowing the application to catch and handle TalonOne API failures distinctly from other exceptions. This exception serves as a domain-specific error type for the TalonOne integration layer, enabling better error handling and separation of concerns in the application's exception hierarchy.

## Classes
- `TalonOneApiException`

## Function Details

### `__construct`

- **Parameters**: `$message = '', $code = 0, ?\Throwable $previous = null`


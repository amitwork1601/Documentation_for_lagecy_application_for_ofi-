# TalonOneApiErrorException.php

**Path**: `src\TalonOne\Domain\Exception\TalonOneApiErrorException.php`

## Summary
This exception class handles API errors from the TalonOne integration by wrapping TalonOne `Error` DTOs into throwable exceptions. It constructs a detailed error message by concatenating the main error message with any nested error details (including JSON pointer paths and descriptions), making API errors easier to debug and handle within the application's exception handling flow.

## Classes
- `TalonOneApiErrorException`

## Function Details

### `__construct`

- **Parameters**: `private Error $error`


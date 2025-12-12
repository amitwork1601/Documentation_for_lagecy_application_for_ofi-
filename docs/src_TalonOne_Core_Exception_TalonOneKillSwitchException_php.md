# TalonOneKillSwitchException.php

**Path**: `src\TalonOne\Core\Exception\TalonOneKillSwitchException.php`

## Summary
This exception class represents a kill switch mechanism for the TalonOne integration, allowing the system to disable or halt TalonOne operations when critical issues arise. It extends the base Exception class and implements the TalonOneTechnicalException interface, providing a standardized way to signal that the TalonOne integration should be stopped. The exception defaults to a 500 error code and uses a specific message identifier ('talon_one.integration.kill_switch') for translation or logging purposes.

## Classes
- `TalonOneKillSwitchException`

## Function Details

### `__construct`

- **Parameters**: `?string $message = null, ?\Throwable $previous = null`


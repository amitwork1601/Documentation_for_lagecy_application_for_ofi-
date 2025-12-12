# KillSwitchClient.php

**Path**: `src\TalonOne\Core\ManagementApi\Decorator\KillSwitchClient.php`

## Summary
This class implements a decorator pattern to provide an emergency kill switch for TalonOne Management API calls. When the kill switch is enabled via the `TALON_ONE_KILL_SWITCH` environment variable, it throws a `TalonOneKillSwitchException` to prevent any API requests from executing, allowing operators to quickly disable TalonOne integration without code changes in case of emergencies or issues.

## Classes
- `KillSwitchClient`

## Function Details

### `execute`

- **Parameters**: `TalonOneRequestInterface $request`


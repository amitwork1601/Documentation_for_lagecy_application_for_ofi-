# KillSwitchClient.php

**Path**: `src\TalonOne\Core\IntegrationApi\Decorator\KillSwitchClient.php`

## Summary
This is a decorator class that implements a kill switch pattern for the TalonOne integration API client. It wraps the actual IntegrationClient and checks an environment variable (`TALON_ONE_KILL_SWITCH`) before allowing requests to execute, throwing a `TalonOneKillSwitchException` if the kill switch is enabled, otherwise delegating to the inner client. This provides an emergency mechanism to quickly disable all TalonOne API integration without code changes by simply toggling an environment variable.

## Classes
- `KillSwitchClient`

## Function Details

### `execute`

- **Parameters**: `TalonOneRequestInterface $request`


# ChannelEnvConfigProvider.php

**Path**: `src\Provider\Channel\ChannelEnvConfigProvider.php`

## Summary
The `ChannelEnvConfigProvider` class provides a service for retrieving channel-specific environment configuration values from the current Sylius channel context. It implements a dot-notation path traversal system (e.g., "key.subkey") to access nested configuration arrays stored in a Channel entity's `envConfig` property, returning a default value if the path doesn't exist or the config is invalid.

## Classes
- `ChannelEnvConfigProvider`

## Function Details

### `getConfig`

- **Parameters**: `string $path, mixed $default = null`
- **Description**: Retrieves a value from `envConfig` using a path (eg: "key.subkey").

@param string     $path
@param mixed|null $default

@return mixed
/


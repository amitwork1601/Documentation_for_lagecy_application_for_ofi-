# ItemProvider.php

**Path**: `src\Api\StateProvider\Admin\SettingDto\ItemProvider.php`

## Summary
This API Platform state provider retrieves individual application settings by their key from the container's parameter bag and exposes them as `SettingDto` objects. It serves as an admin-facing API endpoint that allows reading specific configuration parameters that have been marked as exposed, returning null if the requested setting key doesn't exist or isn't available.

## Classes
- `ItemProvider`

## Function Details

### `provide`

- **Parameters**: `Operation $operation, array $uriVariables = [], array $context = []`


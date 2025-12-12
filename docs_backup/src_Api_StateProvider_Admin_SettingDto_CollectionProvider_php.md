# CollectionProvider.php

**Path**: `src\Api\StateProvider\Admin\SettingDto\CollectionProvider.php`

## Summary
This API Platform state provider retrieves application settings exposed for administrative purposes and transforms them into a collection of `SettingDto` objects. It reads configuration parameters from Symfony's parameter bag (specifically those under 'exposed.parameters') and maps each key-value pair into a DTO for API consumption, enabling admin users to view system configuration settings through the API.

## Classes
- `CollectionProvider`

## Function Details

### `provide`

- **Parameters**: `Operation $operation, array $uriVariables = [], array $context = []`


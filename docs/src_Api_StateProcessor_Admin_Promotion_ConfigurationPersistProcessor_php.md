# ConfigurationPersistProcessor.php

**Path**: `src\Api\StateProcessor\Admin\Promotion\ConfigurationPersistProcessor.php`

## Summary
This state processor handles the persistence of configurable promotion elements (promotion actions and rules) in an e-commerce API context. It validates and processes configuration data for promotion actions and rules by using the appropriate form type registry based on the element type, then delegates to a standard persistence processor to save the validated data to the database.

## Classes
- `ConfigurationPersistProcessor`

## Function Details

### `process`

- **Parameters**: `mixed $data, Operation $operation, array $uriVariables = [], array $context = []`

### `processForm`

- **Parameters**: `string $formConfigurationType, array $configuration`


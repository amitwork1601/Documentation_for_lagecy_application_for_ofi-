# RegisterActionsAndRulesConfigurationSchemaPass.php

**Path**: `src\DependencyInjection\Compiler\RegisterActionsAndRulesConfigurationSchemaPass.php`

## Summary
This compiler pass registers configuration schemas for promotion actions, promotion rules, and shipping method rules by collecting services tagged with specific tags (`sylius.promotion_action`, `sylius.promotion_rule_checker`, etc.) and injecting their metadata into corresponding schema provider controllers. It serves as a dependency injection configuration step that builds a registry of available business rule types and their implementations, enabling the API to expose schema information about configurable promotion and shipping logic to clients.

## Classes
- `RegisterActionsAndRulesConfigurationSchemaPass`

## Function Details

### `process`

- **Parameters**: `ContainerBuilder $container`

### `registerPromotionActions`

- **Parameters**: `ContainerBuilder $container`

### `registerPromotionRules`

- **Parameters**: `ContainerBuilder $container`

### `registerShippingMethodRules`

- **Parameters**: `ContainerBuilder $container`


# RemoveServicesPass.php

**Path**: `src\DependencyInjection\Compiler\RemoveServicesPass.php`

## Summary
This compiler pass removes a specific Sylius API service definition (`sylius_api.doctrine.orm.query_extension.admin.order.state_based`) from the Symfony dependency injection container during the compilation phase. It's used to override or disable Sylius's default order state-based query filtering behavior in the admin API, likely to replace it with custom query logic or remove unwanted filtering constraints.

## Classes
- `RemoveServicesPass`

## Function Details

### `process`

- **Parameters**: `ContainerBuilder $container`


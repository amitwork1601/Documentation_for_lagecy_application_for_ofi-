# UnregisterSyliusThemeBundleServicesPass.php

**Path**: `src\DependencyInjection\Compiler\UnregisterSyliusThemeBundleServicesPass.php`

## Summary
This compiler pass removes Sylius services from the dependency injection container that depend on the SyliusThemeBundle. It scans all services with IDs starting with "sylius.", identifies those with arguments referencing the ThemeBundle or specific theme-related repositories (like 'sylius.repository.theme'), and removes those service definitions from the container to effectively disable theme functionality.

## Classes
- `UnregisterSyliusThemeBundleServicesPass`

## Function Details

### `process`

- **Parameters**: `ContainerBuilder $container`


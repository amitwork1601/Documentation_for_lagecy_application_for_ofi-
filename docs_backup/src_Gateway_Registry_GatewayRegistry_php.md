# GatewayRegistry.php

**Path**: `src\Gateway\Registry\GatewayRegistry.php`

## Summary
The `GatewayRegistry` class serves as a registry/repository for managing payment gateway implementations in a Sylius-based e-commerce application. It stores and retrieves gateway instances organized by type and identifier, using a support-based matching system to find the appropriate gateway implementation for a given `GatewayConfigInterface`. The registry enables dynamic gateway selection by allowing gateways to self-declare support for specific configurations, facilitating a flexible payment gateway architecture.

## Classes
- `GatewayRegistry`

## Function Details

### `add`

- **Parameters**: `string $typeIdentifier, string $gatewayIdentifier, GatewayRegistryInterface $generator`

### `getAllFromType`

- **Parameters**: `string $typeIdentifier`

### `find`

- **Parameters**: `string $typeIdentifier, GatewayConfigInterface $gatewayConfig`


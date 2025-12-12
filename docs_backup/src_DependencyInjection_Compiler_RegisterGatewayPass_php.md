# RegisterGatewayPass.php

**Path**: `src\DependencyInjection\Compiler\RegisterGatewayPass.php`

## Summary
This is a Symfony compiler pass that automatically registers gateway services into the `GatewayRegistry` by scanning for services tagged with `app.gateway.registry`. It validates that each tagged service has both `type` and `gateway` attributes, then dynamically calls the registry's `add` method to register each gateway with its corresponding type and gateway identifiers, enabling a centralized gateway lookup mechanism at runtime.

## Classes
- `RegisterGatewayPass`

## Function Details

### `process`

- **Parameters**: `ContainerBuilder $container`


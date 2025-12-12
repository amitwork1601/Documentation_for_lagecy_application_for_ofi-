# RegisterGatewayConfigSchemaPass.php

**Path**: `src\DependencyInjection\Compiler\RegisterGatewayConfigSchemaPass.php`

## Summary
This Symfony compiler pass collects and registers gateway configuration schemas for both payment and shipping methods by scanning services tagged with `sylius.gateway_configuration_type` and `app.shipping_method.gateway_configuration_type`. It aggregates the gateway type metadata and their corresponding form type classes, then injects this compiled schema information as arguments into API controllers (`GetPaymentMethodGatewaySchema` and `GetShippingMethodGatewaySchema`) that expose gateway configuration schemas through API endpoints. This enables dynamic discovery and exposure of available gateway configurations without hardcoding them.

## Classes
- `RegisterGatewayConfigSchemaPass`

## Function Details

### `process`

- **Parameters**: `ContainerBuilder $container`

### `registerPaymentMethod`

- **Parameters**: `ContainerBuilder $container`

### `registerShippingMethod`

- **Parameters**: `ContainerBuilder $container`


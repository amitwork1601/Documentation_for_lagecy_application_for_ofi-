# RegisterShippingMethodGatewayConfigTypePass.php

**Path**: `src\DependencyInjection\Compiler\RegisterShippingMethodGatewayConfigTypePass.php`

## Summary
This compiler pass registers shipping method gateway configuration types into Sylius's payment gateway config form registry. It collects services tagged with `app.shipping_method.gateway_configuration_type`, validates their attributes (type, label, gateway), and registers them while determining if each gateway implements pickup point functionality. The pass essentially bridges custom shipping gateway configurations into Sylius's form system, enabling different shipping methods (including pickup points) to have their own configuration forms.

## Classes
- `RegisterShippingMethodGatewayConfigTypePass`

## Function Details

### `process`

- **Parameters**: `ContainerBuilder $container`


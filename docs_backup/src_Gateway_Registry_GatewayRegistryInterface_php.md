# GatewayRegistryInterface.php

**Path**: `src\Gateway\Registry\GatewayRegistryInterface.php`

## Summary
This interface defines a contract for a gateway registry system that manages payment and shipping method configurations in what appears to be a Sylius-based e-commerce application. It provides methods to check if a gateway configuration is supported and to register gateway configurations, with constants indicating it handles both shipping and payment method gateways. The interface serves as an abstraction layer for integrating different payment/shipping providers through Payum bundle's gateway configuration system.

## Function Details

### `supports`

- **Parameters**: `GatewayConfigInterface $gatewayConfig`

### `setGatewayConfig`

- **Parameters**: `GatewayConfigInterface $gatewayConfig`


# GatewayRegistryWithFactoryNamesInterface.php

**Path**: `src\Gateway\Registry\GatewayRegistryWithFactoryNamesInterface.php`

## Summary
This interface extends the base `GatewayRegistryInterface` to add functionality for retrieving a list of supported gateway factory names. It exists to provide a contract for gateway registries that need to expose which payment/service gateway implementations are available in the system, likely used for configuration, validation, or dynamic gateway selection purposes.

## Function Details

### `getSupportedGateway`



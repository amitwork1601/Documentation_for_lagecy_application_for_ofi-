# MondialRelayPointGateway.php

**Path**: `src\Gateway\MondialRelayPointGateway.php`

## Summary
The `MondialRelayPointGateway` class implements a gateway for integrating with the Mondial Relay shipping service's pickup point system. It handles configuration of the Mondial Relay API client using credentials and connection parameters from gateway configurations, and implements the `PickupPointGatewayInterface` to enable searching and managing Mondial Relay pickup locations. The class serves as an adapter between the application's shipping system and the Mondial Relay API, supporting the 'mondial_relay' gateway factory type for pickup point operations.

## Classes
- `MondialRelayPointGateway`

## Function Details

### `supports`

- **Parameters**: `GatewayConfigInterface $gatewayConfig`

### `getSupportedGateway`


### `setGatewayConfig`

- **Parameters**: `GatewayConfigInterface $gatewayConfig`
- **Description**: @throws Exception
/

### `find`

- **Parameters**: `string $externalReference, array $params = []`
- **Description**: @throws Exception
/

### `findAll`

- **Parameters**: `array $params = []`
- **Description**: @throws Exception
/

### `getCredentials`

- **Parameters**: `GatewayConfigInterface $gatewayConfig`
- **Description**: @throws Exception
/

### `getApiUrl`

- **Parameters**: `GatewayConfigInterface $gatewayConfig`
- **Description**: @throws Exception
/

### `getFtpHost`

- **Parameters**: `GatewayConfigInterface $gatewayConfig`
- **Description**: @throws Exception
/

### `getParams`

- **Parameters**: `GatewayConfigInterface $gatewayConfig`

### `getCommonShippingMethods`


### `log`

- **Parameters**: `$level, $message, $context = []`


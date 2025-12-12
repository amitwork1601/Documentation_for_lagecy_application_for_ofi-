# ColissimoPointGateway.php

**Path**: `src\Gateway\ColissimoPointGateway.php`

## Summary
The `ColissimoPointGateway` class implements a gateway for integrating with Colissimo's pickup point shipping service, allowing the application to retrieve and manage delivery pickup locations. It acts as an adapter that configures an FTP-based Colissimo API client using gateway configuration credentials (host, login, password, country) and provides methods to find individual or multiple pickup points, converting the external API responses into internal `PickupPointDto` objects. The class supports gateway registration and validation through factory name matching, specifically handling the 'colissimo_pickup' shipping method.

## Classes
- `ColissimoPointGateway`

## Function Details

### `supports`

- **Parameters**: `GatewayConfigInterface $gatewayConfig`

### `getSupportedGateway`


### `setGatewayConfig`

- **Parameters**: `GatewayConfigInterface $gatewayConfig`

### `find`

- **Parameters**: `string $externalReference, array $params = []`

### `findAll`

- **Parameters**: `array $params = []`
- **Description**: @throws \Exception  */

### `logError`

- **Parameters**: `$message, $context = []`


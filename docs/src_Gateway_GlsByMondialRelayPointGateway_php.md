# GlsByMondialRelayPointGateway.php

**Path**: `src\Gateway\GlsByMondialRelayPointGateway.php`

## Summary
This class implements a gateway for retrieving GLS (General Logistics Systems) pickup point information when using Mondial Relay as the shipping provider. It integrates with the GLS ShipIt API to fetch parcel shop details by external reference, converts the API response into standardized PickupPointDto objects, and handles the configuration and support verification for the 'gls_by_mondial_relay' shipping gateway within a Sylius e-commerce application.

## Classes
- `GlsByMondialRelayPointGateway`

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

### `getGlsShipItClientConfig`

- **Parameters**: `GatewayConfig $gatewayConfig`

### `getCommonShippingMethods`


### `log`

- **Parameters**: `$level, $message, $context = []`


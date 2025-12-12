# MondialRelayClient.php

**Path**: `src\Gateway\Api\MondialRelay\MondialRelayClient.php`

## Summary
The `MondialRelayClient` class is a SOAP/FTP client for integrating with the Mondial Relay shipping and parcel delivery service API. It manages authentication credentials, initializes a nusoap_client for web service calls, and provides FTP connectivity for file-based operations with Mondial Relay's systems. The client supports configurable options like timeouts, country-specific settings, and locker availability filtering for pickup point operations.

## Classes
- `MondialRelayClient`

## Function Details

### `create`

- **Parameters**: `string $apiUrl, array $options = []`

### `createFtpClient`


### `getSecurityKey`

- **Parameters**: `array $params`

### `callMethod`

- **Parameters**: `AbstractMethodInterface $method`

### `getAllPointRelais`

- **Description**: @throws Exception
/


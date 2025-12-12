# MondialRelayFtpResponse.php

**Path**: `src\Gateway\Api\MondialRelay\Resources\MondialRelayFtpResponse.php`

## Summary
This class transforms fixed-width formatted FTP responses from Mondial Relay (a pickup point delivery service) into structured PickupPointDto objects. It uses a position-based mapper to extract fields like address, coordinates, and reference codes from specific character positions in the response string, with special handling for multi-field values that need to be concatenated, and includes business logic for locker weight limits (24.4kg constant).

## Classes
- `MondialRelayFtpResponse`

## Function Details

### `transformFtpResponseToPickupPointDTo`

- **Parameters**: `string $response, array $commonShippingMethods = []`

### `getValue`

- **Parameters**: `string $response, int $start, int $length`

### `formatToDecimalDegrees`

- **Parameters**: `string $value`

### `formatClosingDate`

- **Parameters**: `string $closingDate`


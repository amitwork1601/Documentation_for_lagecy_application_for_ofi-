# MondialRelayResponse.php

**Path**: `src\Gateway\Api\MondialRelay\Resources\MondialRelayResponse.php`

## Summary
This class transforms Mondial Relay API responses into standardized `PickupPointDto` objects for the application's pickup point management system. It maps Mondial Relay's specific field names (like 'LgAdr1', 'CP', 'Ville') to the application's internal pickup point data structure, handling address composition, geolocation coordinates, external references, and opening hours parsing. The class serves as an adapter/transformer layer between the Mondial Relay shipping service API and the application's domain model.

## Classes
- `MondialRelayResponse`

## Function Details

### `transformResponseToPickupPointDTo`

- **Parameters**: `array $mondialRelayResponse`


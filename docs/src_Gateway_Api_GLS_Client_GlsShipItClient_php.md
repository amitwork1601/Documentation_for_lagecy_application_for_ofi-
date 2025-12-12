# GlsShipItClient.php

**Path**: `src\Gateway\Api\GLS\Client\GlsShipItClient.php`

## Summary
The `GlsShipItClient` class is an HTTP client wrapper for interacting with the GLS ShipIt API to retrieve parcel shop (pickup point) information. It provides two main methods: fetching all parcel shops by country code and retrieving specific parcel shop details by ID, both authenticated via HTTP basic authentication using configured credentials.

## Classes
- `GlsShipItClient`

## Function Details

### `__construct`

- **Parameters**: `array $config`

### `getParcelShopsByCountryCode`

- **Description**: @throws GuzzleException
/

### `getParcelShopById`

- **Parameters**: `string $parcelId`
- **Description**: @throws GuzzleException
/


# GenericApi.php

**Path**: `plugins\PayPalPlugin\src\Api\GenericApi.php`

## Summary
The `GenericApi` class provides a generic HTTP client wrapper for making authenticated GET requests to PayPal API endpoints. It accepts an authentication token and URL, then executes the request with proper authorization headers and returns the JSON response as a decoded PHP array. This serves as a reusable abstraction layer for PayPal API communication within the Sylius PayPal plugin.

## Classes
- `GenericApi`

## Function Details

### `__construct`

- **Parameters**: `ClientInterface $client`

### `get`

- **Parameters**: `string $token, string $url`


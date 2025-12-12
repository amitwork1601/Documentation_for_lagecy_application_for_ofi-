# PayPalClientInterface.php

**Path**: `plugins\PayPalPlugin\src\Client\PayPalClientInterface.php`

## Summary
This interface defines the contract for a PayPal API client used in a Sylius e-commerce plugin. It provides methods for OAuth authorization with PayPal credentials and making HTTP requests (GET, POST, PATCH) to PayPal's REST API endpoints with authentication tokens, enabling integration with PayPal payment services for order processing and transaction management.

## Function Details

### `authorize`

- **Parameters**: `string $clientId, string $clientSecret`
- **Description**: @throws PayPalAuthorizationException */

### `get`

- **Parameters**: `string $url, string $token`

### `post`

- **Parameters**: `string $url, string $token, ?array $data = null, array $extraHeaders = []`

### `patch`

- **Parameters**: `string $url, string $token, ?array $data = null`


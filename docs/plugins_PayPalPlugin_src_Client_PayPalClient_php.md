# PayPalClient.php

**Path**: `plugins\PayPalPlugin\src\Client\PayPalClient.php`

## Summary
The `PayPalClient` class is a Sylius PayPal plugin component that handles HTTP communication with PayPal's API services. It wraps Guzzle HTTP client functionality to make authenticated requests to PayPal endpoints, managing configuration retrieval per channel, implementing retry logic with trial limits, and handling PayPal-specific exceptions like authorization failures and timeouts. The class serves as the primary interface for all PayPal API interactions within the Sylius e-commerce platform, including logging capabilities for debugging PayPal integration issues.

## Classes
- `PayPalClient`

## Function Details

### `authorize`

- **Parameters**: `string $clientId, string $clientSecret`

### `get`

- **Parameters**: `string $url, string $token`

### `post`

- **Parameters**: `string $url, string $token, ?array $data = null, array $extraHeaders = []`

### `patch`

- **Parameters**: `string $url, string $token, ?array $data = null`

### `request`

- **Parameters**: `string $method, string $url, string $token, ?array $data = null, array $extraHeaders = []`

### `doRequest`

- **Parameters**: `string $method, string $fullUrl, array $options`


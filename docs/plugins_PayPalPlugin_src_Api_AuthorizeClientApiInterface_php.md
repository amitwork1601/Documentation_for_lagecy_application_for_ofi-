# AuthorizeClientApiInterface.php

**Path**: `plugins\PayPalPlugin\src\Api\AuthorizeClientApiInterface.php`

## Summary
This interface defines a contract for authorizing PayPal API clients by exchanging client credentials (client ID and secret) for an authorization token. It serves as an abstraction layer for the PayPal OAuth authentication flow, allowing the Sylius PayPal plugin to obtain access tokens needed for subsequent PayPal API operations.

## Function Details

### `authorize`

- **Parameters**: `string $clientId, string $clientSecret`


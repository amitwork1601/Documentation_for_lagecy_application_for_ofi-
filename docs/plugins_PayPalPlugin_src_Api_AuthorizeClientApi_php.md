# AuthorizeClientApi.php

**Path**: `plugins\PayPalPlugin\src\Api\AuthorizeClientApi.php`

## Summary
This class provides an API wrapper for PayPal client authorization within the Sylius e-commerce platform's PayPal plugin. It takes a client ID and secret, delegates the authorization request to a PayPal client, and extracts and returns the access token needed for subsequent PayPal API calls.

## Classes
- `AuthorizeClientApi`

## Function Details

### `__construct`

- **Parameters**: `PayPalClientInterface $payPalClient`

### `authorize`

- **Parameters**: `string $clientId, string $clientSecret`


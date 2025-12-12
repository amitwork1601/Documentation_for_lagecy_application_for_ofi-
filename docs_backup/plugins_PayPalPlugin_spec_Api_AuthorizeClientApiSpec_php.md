# AuthorizeClientApiSpec.php

**Path**: `plugins\PayPalPlugin\spec\Api\AuthorizeClientApiSpec.php`

## Summary
This is a PHPSpec test specification for the `AuthorizeClientApi` class in the Sylius PayPal plugin. It verifies that the API correctly implements the authorization interface and can retrieve PayPal access tokens by passing client credentials (client ID and secret) to the PayPal client, extracting and returning just the token value from the response.

## Classes
- `AuthorizeClientApiSpec`

## Function Details

### `let`

- **Parameters**: `PayPalClientInterface $payPalClient`

### `it_implements_authorize_client_api_interface`


### `it_returns_auth_token_for_given_client_data`

- **Parameters**: `PayPalClientInterface $payPalClient`


# IdentityApiSpec.php

**Path**: `plugins\PayPalPlugin\spec\Api\IdentityApiSpec.php`

## Summary
This is a PhpSpec test specification file for the IdentityApi class in the Sylius PayPal plugin. It tests the functionality of generating PayPal identity tokens by verifying that the API correctly calls the PayPal client's `/v1/identity/generate-token` endpoint and extracts the `client_token` from the response. The tests ensure the class implements the IdentityApiInterface and properly handles token generation for PayPal identity/authentication operations.

## Classes
- `IdentityApiSpec`

## Function Details

### `let`

- **Parameters**: `PayPalClientInterface $payPalClient`

### `it_implements_identity_api_interface`


### `it_generates_identity_token`

- **Parameters**: `PayPalClientInterface $payPalClient`


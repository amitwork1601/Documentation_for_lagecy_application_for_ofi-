# IdentityApi.php

**Path**: `plugins\PayPalPlugin\src\Api\IdentityApi.php`

## Summary
This class implements PayPal's Identity API functionality for the Sylius e-commerce platform's PayPal plugin. Its primary purpose is to generate client tokens by making authenticated requests to PayPal's identity token generation endpoint, which are typically used for client-side PayPal integrations (like hosted fields or checkout buttons). The class acts as a wrapper around the PayPal client, simplifying token generation by handling the API call and extracting the client token from the response.

## Classes
- `IdentityApi`

## Function Details

### `__construct`

- **Parameters**: `PayPalClientInterface $client`

### `generateToken`

- **Parameters**: `string $token`


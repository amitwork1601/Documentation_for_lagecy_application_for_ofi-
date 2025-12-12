# ApiPlatformSecurityClient.php

**Path**: `tests\Behat\Client\ApiPlatformSecurityClient.php`

## Summary
This class is a Behat testing client that handles API authentication for Sylius e-commerce platform's API Platform integration. It implements the `ApiSecurityClientInterface` to build and execute login requests by collecting credentials (email/password), managing query parameters (including automatic channel code injection from shared storage), and submitting POST requests to the `/authentication-token` endpoint to obtain security tokens for authenticated API testing scenarios.

## Classes
- `ApiPlatformSecurityClient`

## Function Details

### `prepareLoginRequest`


### `setEmail`

- **Parameters**: `string $email`

### `setPassword`

- **Parameters**: `string $password`

### `addQueryParameters`

- **Parameters**: `array $parameters`

### `call`


### `isLoggedIn`


### `getErrorMessage`


### `logOut`



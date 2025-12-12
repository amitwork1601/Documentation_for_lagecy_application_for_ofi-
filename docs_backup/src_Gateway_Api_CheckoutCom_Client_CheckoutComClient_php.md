# CheckoutComClient.php

**Path**: `src\Gateway\Api\CheckoutCom\Client\CheckoutComClient.php`

## Summary
This class serves as a factory/client wrapper for initializing and configuring the Checkout.com payment gateway SDK. It provides two authentication methods for creating CheckoutApi instances: OAuth-based authentication with configurable scopes (defaulting to Gateway scope) and static key-based authentication using public/secret key pairs, both configured according to the specified environment settings.

## Classes
- `CheckoutComClient`

## Function Details

### `getOauthCheckoutApi`

- **Parameters**: `?array $scopes = null`
- **Description**: Generate API builder with oAuth credentials.

@throws CheckoutArgumentException
@throws CheckoutException
/

### `getStaticKeysCheckoutApi`

- **Description**: Generate API builder with static keys.

@throws CheckoutArgumentException
@throws CheckoutException
/


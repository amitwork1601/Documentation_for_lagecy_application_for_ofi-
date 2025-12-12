# CheckoutComClientConfig.php

**Path**: `src\Gateway\Api\CheckoutCom\Client\CheckoutComClientConfig.php`

## Summary
This is a read-only configuration value object that encapsulates all necessary credentials and settings for integrating with the Checkout.com payment gateway API. It stores authentication credentials (client ID/secret, API keys), webhook authentication keys, payment redirect URLs (success/failure), and provides getter methods to access these configuration values. The class includes environment detection logic that maps the environment string to Checkout.com's Environment enum, supporting both sandbox and production modes.

## Classes
- `CheckoutComClientConfig`

## Function Details

### `getEnvironment`


### `getClientId`


### `getClientSecret`


### `getPublicKey`


### `getSecretKey`


### `getWebhookAuthHeaderKey`


### `getWebhookAuthSignatureKey`


### `getSuccessUrl`


### `getFailureUrl`


### `getRawConfig`



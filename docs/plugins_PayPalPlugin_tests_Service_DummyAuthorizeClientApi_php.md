# DummyAuthorizeClientApi.php

**Path**: `plugins\PayPalPlugin\tests\Service\DummyAuthorizeClientApi.php`

## Summary
This is a test dummy implementation of the PayPal authorization client API interface that bypasses actual PayPal OAuth authentication. It exists to provide a predictable, hardcoded token response ('TOKEN') for unit testing PayPal payment workflows without making real API calls to PayPal's authorization endpoints.

## Classes
- `DummyAuthorizeClientApi`

## Function Details

### `authorize`

- **Parameters**: `string $clientId, string $clientSecret`


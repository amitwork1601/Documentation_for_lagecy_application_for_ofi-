# CacheAuthorizeClientApi.php

**Path**: `plugins\PayPalPlugin\src\Api\CacheAuthorizeClientApi.php`

## Summary
This class implements a caching layer for PayPal OAuth authorization tokens to avoid unnecessary API calls. It checks if valid, non-expired credentials exist in the database for a given payment method, returns cached tokens when available, and removes expired credentials before fetching new ones through the underlying authorize client API. This optimization reduces authentication overhead during PayPal payment processing in the Sylius e-commerce system.

## Classes
- `CacheAuthorizeClientApi`

## Function Details

### `authorize`

- **Parameters**: `PaymentMethodInterface $paymentMethod`


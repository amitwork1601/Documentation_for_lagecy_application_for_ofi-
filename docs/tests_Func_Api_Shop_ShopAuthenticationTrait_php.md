# ShopAuthenticationTrait.php

**Path**: `tests\Func\Api\Shop\ShopAuthenticationTrait.php`

## Summary
This trait provides authentication helper methods for API functional tests in a shop/e-commerce context. It allows test classes to authenticate users by sending credentials to the `/api/v2/shop/authentication-token` endpoint and retrieve JWT tokens, with default test credentials provided for convenience. The trait simplifies the authentication flow in API tests by encapsulating the login request and token extraction logic.

## Function Details

### `authenticate`

- **Parameters**: `string $username, string $password`

### `getAuthToken`

- **Parameters**: `string $username = self::SHOP_USERNAME, string $password = self::SHOP_PASSWORD`


# AdminAuthenticationTrait.php

**Path**: `tests\Func\Api\Admin\AdminAuthenticationTrait.php`

## Summary
This is a reusable test trait that provides admin authentication functionality for API functional tests. It contains methods to authenticate an admin user against the `/api/v2/admin/authentication-token` endpoint and retrieve JWT tokens, with default credentials for testing purposes. The trait simplifies test setup by allowing test classes to easily obtain authentication tokens needed to test protected admin API endpoints.

## Function Details

### `authenticate`

- **Parameters**: `string $username, string $password`

### `getAuthToken`

- **Parameters**: `string $username = self::ADMIN_USERNAME, string $password = self::ADMIN_PASSWORD`


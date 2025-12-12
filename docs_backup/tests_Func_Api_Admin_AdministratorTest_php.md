# AdministratorTest.php

**Path**: `tests\Func\Api\Admin\AdministratorTest.php`

## Summary
This is a functional test class for the Administrator API endpoints in an admin interface. It tests JWT-based authentication and verifies that the GET administrators endpoint properly requires authentication, returns the correct response format (JSON-LD), and retrieves the expected number of administrator users (7) from the system.

## Classes
- `AdministratorTest`

## Function Details

### `testLogin`

- **Parameters**: `string $username = self::ADMIN_USERNAME, string $password = self::ADMIN_PASSWORD`
- **Description**: @internal

@coversNothing
/
final class AdministratorTest extends ApiTestCase
{
use AdminAuthenticationTrait;

private array $adminUsers;
private int $nbUsers = 7;

/**
@throws ExceptionInterface
/

### `testGetAdministrators`

- **Description**: @depends testLogin
/

### `getAdministrators`

- **Parameters**: `?string $token = null`


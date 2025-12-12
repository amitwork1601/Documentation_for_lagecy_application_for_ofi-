# CustomerTest.php

**Path**: `tests\Func\Api\Shop\CustomerTest.php`

## Summary
This is a functional test class for the Shop API's customer authentication and retrieval endpoints. It tests the ability to log in as a shop customer and retrieve customer data via the API, verifying that authenticated users can access their own customer information through bearer token authentication. The tests validate both the login flow (returning a user object with email) and the GET customer endpoint (retrieving customer details using the authenticated token).

## Classes
- `CustomerTest`

## Function Details

### `testLogin`

- **Parameters**: `string $username = self::SHOP_USERNAME, string $password = self::SHOP_PASSWORD`
- **Description**: @internal

@coversNothing
/
final class CustomerTest extends ApiTestCase
{
use ShopAuthenticationTrait;

private array $shopUsers;

/**
@throws ExceptionInterface
/

### `testGetCustomer`


### `getCustomer`

- **Parameters**: `string|int $id, ?string $token = null`


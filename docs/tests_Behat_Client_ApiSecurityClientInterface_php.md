# ApiSecurityClientInterface.php

**Path**: `tests\Behat\Client\ApiSecurityClientInterface.php`

## Summary
This interface defines the contract for an API security client used in Behat behavioral tests for authentication functionality. It provides methods to prepare and execute login requests with email/password credentials, manage authentication state (login/logout), and handle error messages. The interface exists to standardize how authentication testing is performed across different Behat test contexts, enabling verification of user login, logout, and authentication error scenarios.

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



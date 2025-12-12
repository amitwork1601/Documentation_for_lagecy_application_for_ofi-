# GoogleAuthenticator.php

**Path**: `src\Api\Security\GoogleAuthenticator.php`

## Summary
This class implements a custom Symfony authenticator that enables Google OAuth authentication for both shop and admin users in a Sylius-based e-commerce application. It intercepts authentication requests containing a Google token, verifies the token using Google's AccessToken library, extracts the user's email, and creates a JWT-authenticated session through Lexik's JWT authentication bundle. The authenticator supports two authentication endpoints (shop and admin) and handles the full authentication flow from Google token validation to JWT token generation for successful logins.

## Classes
- `GoogleAuthenticator`

## Function Details

### `supports`

- **Parameters**: `Request $request`

### `authenticate`

- **Parameters**: `Request $request`

### `onAuthenticationSuccess`

- **Parameters**: `Request $request, TokenInterface $token, string $firewallName`

### `onAuthenticationFailure`

- **Parameters**: `Request $request, AuthenticationException $exception`


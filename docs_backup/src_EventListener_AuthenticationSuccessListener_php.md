# AuthenticationSuccessListener.php

**Path**: `src\EventListener\AuthenticationSuccessListener.php`

## Summary
This event listener enhances JWT authentication success responses by adding user-specific data to the authentication payload. When a shop user or admin user successfully authenticates, it enriches the JWT response with normalized user/customer data (including customer details, last order date, and active cart information for shop users), making this information immediately available to the client without requiring additional API calls.

## Classes
- `AuthenticationSuccessListener`

## Function Details

### `onAuthenticationSuccessResponse`

- **Parameters**: `AuthenticationSuccessEvent $event`

### `getShopUserEventData`

- **Parameters**: `AuthenticationSuccessEvent $event`

### `getAdminUserEventData`

- **Parameters**: `AuthenticationSuccessEvent $event`


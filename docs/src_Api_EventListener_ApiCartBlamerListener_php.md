# ApiCartBlamerListener.php

**Path**: `src\Api\EventListener\ApiCartBlamerListener.php`

## Summary
This listener handles the assignment of guest shopping carts to authenticated users when they log in through the API. When a successful login event occurs in the shop API section, it retrieves any existing guest cart, acquires a lock on it to prevent concurrent modifications, and dispatches a `BlameCart` command to associate that cart with the newly authenticated user's email address.

## Classes
- `ApiCartBlamerListener`

## Function Details

### `onLoginSuccess`

- **Parameters**: `LoginSuccessEvent $loginSuccessEvent`

### `getCart`

- **Description**: @throws UnexpectedTypeException
/


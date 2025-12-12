# CartsByLoggedInUserExtension.php

**Path**: `src\Doctrine\Extension\CartsByLoggedInUserExtension.php`

## Summary
This Doctrine ORM extension filters shopping cart queries to ensure users only see their own carts in an e-commerce application. For shop users accessing the 'carts_get' operation, it restricts results to non-expired carts (excluding subscription orders) in the cart state, while admin users have unrestricted access to all carts.

## Classes
- `CartsByLoggedInUserExtension`

## Function Details

### `__construct`

- **Parameters**: `private UserContextInterface $userContext`


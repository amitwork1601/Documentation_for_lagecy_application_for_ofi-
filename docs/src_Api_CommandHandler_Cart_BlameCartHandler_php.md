# BlameCartHandler.php

**Path**: `src\Api\CommandHandler\Cart\BlameCartHandler.php`

## Summary
This handler assigns ownership of a guest shopping cart to an authenticated user when they log in, converting an anonymous cart into a user-associated cart. It validates the user exists by email, retrieves the guest cart by token, assigns the cart to the authenticated customer, removes any free promotional products that may no longer apply, reprocesses the cart with updated pricing/promotions, and persists the changes.

## Classes
- `BlameCartHandler`

## Function Details

### `__invoke`

- **Parameters**: `BlameCart $blameCart`


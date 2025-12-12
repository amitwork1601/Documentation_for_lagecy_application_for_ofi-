# findCartByTokenValueQueryHandler.php

**Path**: `src\CQRS\QueryHandler\Order\findCartByTokenValueQueryHandler.php`

## Summary
This query handler retrieves a shopping cart (order in cart state) from the database using a unique token value. It serves as part of a CQRS pattern implementation to look up active carts, typically used for guest checkout sessions or cart recovery functionality where the cart needs to be identified by its token rather than a user ID.

## Classes
- `findCartByTokenValueQueryHandler`

## Function Details

### `__invoke`

- **Parameters**: `findCartByTokenValueQuery $query`


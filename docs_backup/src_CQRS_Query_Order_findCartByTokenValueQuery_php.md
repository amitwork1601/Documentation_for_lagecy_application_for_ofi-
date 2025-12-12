# findCartByTokenValueQuery.php

**Path**: `src\CQRS\Query\Order\findCartByTokenValueQuery.php`

## Summary
This is a CQRS query class that encapsulates a request to retrieve a shopping cart by its unique token value. It implements the QueryInterface and serves as a data transfer object (DTO) that carries the token identifier needed to locate a specific cart in the system. This query would typically be used in e-commerce scenarios where carts are identified and retrieved via token-based URLs or session identifiers rather than user IDs.

## Classes
- `findCartByTokenValueQuery`

## Function Details

### `getTokenValue`



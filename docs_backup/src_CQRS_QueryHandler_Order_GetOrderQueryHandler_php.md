# GetOrderQueryHandler.php

**Path**: `src\CQRS\QueryHandler\Order\GetOrderQueryHandler.php`

## Summary
This is a CQRS query handler that retrieves a specific Order entity from the database. It accepts a `GetOrderQuery` containing an order ID, delegates to the `OrderRepository` to fetch the corresponding order, and returns the Order entity for read operations in the order management domain.

## Classes
- `GetOrderQueryHandler`

## Function Details

### `__construct`

- **Parameters**: `OrderRepository $orderRepository`

### `__invoke`

- **Parameters**: `GetOrderQuery $query`


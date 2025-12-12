# GetOrderQuery.php

**Path**: `src\CQRS\Query\Order\GetOrderQuery.php`

## Summary
This class represents a CQRS query object used to retrieve a specific order by its ID. It implements the QueryInterface as part of the Command Query Responsibility Segregation pattern, encapsulating the request parameters needed to fetch order data from the system. The query acts as a data transfer object that carries the order identifier through the query handling pipeline.

## Classes
- `GetOrderQuery`

## Function Details

### `__construct`

- **Parameters**: `int $orderId`

### `getOrderId`



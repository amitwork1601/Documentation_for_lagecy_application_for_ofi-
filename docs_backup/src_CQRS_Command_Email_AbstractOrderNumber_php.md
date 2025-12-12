# AbstractOrderNumber.php

**Path**: `src\CQRS\Command\Email\AbstractOrderNumber.php`

## Summary
This abstract base class serves as a data transfer object (DTO) for email-related commands in a CQRS architecture that require an order number. It encapsulates the order number as a protected property and provides a getter method, allowing concrete email command classes to inherit this common functionality for order-based email operations (such as order confirmation, shipping notifications, etc.).

## Classes
- `AbstractOrderNumber`

## Function Details

### `__construct`

- **Parameters**: `protected string $orderNumber`

### `getOrderNumber`



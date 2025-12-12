# AbstractTokenValueCommand.php

**Path**: `src\CQRS\Command\AbstractTokenValueCommand.php`

## Summary
This abstract base class serves as a foundation for CQRS commands that operate on orders identified by a token value. It encapsulates and provides access to an order's token value, allowing concrete command classes to inherit this common functionality for order-related operations in a CQRS architecture.

## Classes
- `AbstractTokenValueCommand`

## Function Details

### `__construct`

- **Parameters**: `private string $orderTokenValue`

### `getOrderTokenValue`



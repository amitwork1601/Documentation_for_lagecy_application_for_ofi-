# OrderProcessing.php

**Path**: `src\CQRS\Command\OrderProcessing.php`

## Summary
This is a CQRS command class that represents an intent to process an order in the system. It encapsulates the order ID as immutable data that will be used by a command handler to execute the order processing business logic. This follows the Command pattern where the command object carries the necessary parameters for the operation but doesn't contain the execution logic itself.

## Classes
- `OrderProcessing`

## Function Details

### `__construct`

- **Parameters**: `int $orderId`

### `getOrderId`



# UpdateDraftOrderStateCommand.php

**Path**: `src\CQRS\Command\Order\UpdateDraftOrderStateCommand.php`

## Summary
This command class represents an intent to update the state of a draft order in a CQRS (Command Query Responsibility Segregation) architecture. It encapsulates the order ID parameter needed to identify which draft order's state should be updated, serving as a data transfer object that will be handled by a corresponding command handler to perform the actual state transition business logic.

## Classes
- `UpdateDraftOrderStateCommand`

## Function Details

### `__construct`

- **Parameters**: `int $orderId`

### `getOrderId`



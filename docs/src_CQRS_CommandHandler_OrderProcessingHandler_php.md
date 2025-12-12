# OrderProcessingHandler.php

**Path**: `src\CQRS\CommandHandler\OrderProcessingHandler.php`

## Summary
The `OrderProcessingHandler` is a CQRS command handler that processes order calculations and updates. When invoked with an `OrderProcessing` command, it retrieves an order by ID from the repository, runs it through the order processor (likely to recalculate totals, taxes, promotions, etc.), and persists the changes to the database.

## Classes
- `OrderProcessingHandler`

## Function Details

### `__invoke`

- **Parameters**: `OrderProcessing $command`


# ForceOrderProcessor.php

**Path**: `src\Api\Controller\Order\ForceOrderProcessor.php`

## Summary
This controller forces the processing of a shopping cart/order by its token value in a Sylius e-commerce system. It retrieves an order from the repository, runs it through the order processor to recalculate totals and apply business rules, persists the changes to the database, and returns the updated order entity (throwing a 404 if the order is not found).

## Classes
- `ForceOrderProcessor`

## Function Details

### `__invoke`

- **Parameters**: `string $tokenValue`


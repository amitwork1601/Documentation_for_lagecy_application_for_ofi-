# AddBillToOrder.php

**Path**: `src\Api\Command\Checkout\AddBillToOrder.php`

## Summary
This is a command class that represents the intent to attach a bill document to an order during the checkout process. It encapsulates the order identifier (via `$number`) and the file path to the bill document (`$billPath`), serving as a data transfer object in a command-driven architecture (likely CQRS) for handling bill attachment operations in an e-commerce or ordering system.

## Classes
- `AddBillToOrder`

## Function Details

### `__construct`

- **Parameters**: `public string $number, public string $billPath`


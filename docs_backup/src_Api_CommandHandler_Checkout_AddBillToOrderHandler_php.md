# AddBillToOrderHandler.php

**Path**: `src\Api\CommandHandler\Checkout\AddBillToOrderHandler.php`

## Summary
This command handler processes the addition of a bill/invoice to an existing order in a checkout system. It retrieves an order by its number, validates its existence, then associates a bill file path with the order and records the billing timestamp, enabling the system to track when orders were invoiced and where the bill documents are stored.

## Classes
- `AddBillToOrderHandler`

## Function Details

### `__invoke`

- **Parameters**: `AddBillToOrder $command`


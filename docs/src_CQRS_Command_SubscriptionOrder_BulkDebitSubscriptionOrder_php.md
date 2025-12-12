# BulkDebitSubscriptionOrder.php

**Path**: `src\CQRS\Command\SubscriptionOrder\BulkDebitSubscriptionOrder.php`

## Summary
This is a CQRS command class that represents a bulk debit operation for multiple subscription orders. It serves as a data transfer object (DTO) that encapsulates an array of subscription orders to be processed together in a batch debit transaction. The class is specifically configured for administrative operations, as indicated by the serialization group annotation, and follows the command pattern to trigger bulk payment processing for subscription orders.

## Classes
- `BulkDebitSubscriptionOrder`

## Function Details

### `__construct`

- **Parameters**: `public array $subscriptionOrders`


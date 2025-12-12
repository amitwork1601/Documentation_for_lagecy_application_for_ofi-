# BulkDebitSubscriptionOrderHandler.php

**Path**: `src\CQRS\CommandHandler\SubscriptionOrder\BulkDebitSubscriptionOrderHandler.php`

## Summary
This handler processes bulk debit operations for subscription orders by iterating through a collection of subscription order tokens. For each valid subscription order that exists and isn't in a stopped state, it applies a state transition using the SubscriptionOrderTransitionApplicator to process the payment/debit. The handler is part of a CQRS command pattern implementation for managing recurring subscription billing operations.

## Classes
- `BulkDebitSubscriptionOrderHandler`

## Function Details

### `__invoke`

- **Parameters**: `BulkDebitSubscriptionOrder $command`


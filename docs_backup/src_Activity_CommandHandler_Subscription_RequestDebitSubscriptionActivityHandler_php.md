# RequestDebitSubscriptionActivityHandler.php

**Path**: `src\Activity\CommandHandler\Subscription\RequestDebitSubscriptionActivityHandler.php`

## Summary
This command handler processes subscription debit requests by retrieving a subscription and its associated order, then logging an activity record for the debit request action. It validates that both the subscription and subscription order exist before creating an activity log entry with the `SUBSCRIPTION_REQUEST_DEBIT` action, storing the IDs of both entities for audit/tracking purposes in the subscription billing workflow.

## Classes
- `RequestDebitSubscriptionActivityHandler`

## Function Details

### `__invoke`

- **Parameters**: `RequestDebitSubscriptionActivity $command`


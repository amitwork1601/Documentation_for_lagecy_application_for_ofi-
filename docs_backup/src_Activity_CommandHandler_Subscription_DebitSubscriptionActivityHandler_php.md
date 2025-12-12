# DebitSubscriptionActivityHandler.php

**Path**: `src\Activity\CommandHandler\Subscription\DebitSubscriptionActivityHandler.php`

## Summary
This command handler processes subscription debit activity logging by retrieving subscription and subscription order data, then creating an activity log entry that records the debit transaction outcome. It serves as part of an event-driven architecture to track subscription payment attempts, capturing whether the debit was successful and associated details for audit and monitoring purposes.

## Classes
- `DebitSubscriptionActivityHandler`

## Function Details

### `__invoke`

- **Parameters**: `DebitSubscriptionActivity $command`


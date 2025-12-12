# DebitSubscriptionHandler.php

**Path**: `src\Api\CommandHandler\Subscription\DebitSubscriptionHandler.php`

## Summary
This handler processes subscription debit commands by finding an active subscription, validating it has a draft order, and transitioning that order through the payment/processing workflow. It adjusts the subscription's next shipping date if needed based on holiday schedules and the current date, ensuring timely order fulfillment. The handler is part of a subscription billing system that manages recurring orders and their payment processing cycles.

## Classes
- `DebitSubscriptionHandler`

## Function Details

### `__invoke`

- **Parameters**: `DebitSubscription $debitSubscription`


# CreateSubscriptionActivityHandler.php

**Path**: `src\Activity\CommandHandler\Subscription\CreateSubscriptionActivityHandler.php`

## Summary
This message handler processes the creation of subscription activities by logging subscription creation events in the system's activity log. When a subscription is created, it captures key subscription details (ID, origin order ID, and interval) and registers them through the activity logger, associating the activity with both the subscription and its original order for audit/tracking purposes.

## Classes
- `CreateSubscriptionActivityHandler`

## Function Details

### `__invoke`

- **Parameters**: `CreateSubscriptionActivity $command`


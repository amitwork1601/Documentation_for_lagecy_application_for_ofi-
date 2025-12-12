# UpdateIntervalShippingDateSubscriptionHandler.php

**Path**: `src\Api\CommandHandler\Subscription\UpdateIntervalShippingDateSubscriptionHandler.php`

## Summary
This command handler manages updates to subscription shipping intervals and dates for a subscription management system. It coordinates changes to shipping schedules by handling timezone conversions, acquiring subscription locks to prevent conflicts, applying state transitions to subscription orders, and recording monitoring activities for audit purposes. The handler serves both admin and shop user contexts, ensuring proper authorization and date validation when customers or administrators modify when and how frequently subscription orders should be shipped.

## Classes
- `UpdateIntervalShippingDateSubscriptionHandler`

## Function Details

### `__invoke`

- **Parameters**: `UpdateIntervalShippingDateSubscription $command`

### `applyOutOfErrorToSubscription`

- **Parameters**: `Subscription $subscription`


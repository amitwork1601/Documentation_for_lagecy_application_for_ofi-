# SubscriptionOrderInvalidTalonProcessor.php

**Path**: `src\Order\Processor\SubscriptionOrderInvalidTalonProcessor.php`

## Summary
This processor handles recovery of subscription orders that failed due to Talon.One promotional system unavailability. When a subscription order is in the `TALON_UNAVAILABLE` draft state, it attempts to retry updating the customer session with Talon.One and transition the order out of its error state if successful.

## Classes
- `SubscriptionOrderInvalidTalonProcessor`

## Function Details

### `process`

- **Parameters**: `OrderInterface $order`

### `canBeProcessed`

- **Parameters**: `OrderInterface $order`


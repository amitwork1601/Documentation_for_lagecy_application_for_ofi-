# SubscriptionClosed.php

**Path**: `src\Subscription\Callback\SubscriptionClosed.php`

## Summary
This callback handler responds to subscription closure events by triggering an update to the customer's business report. When a subscription transitions to a closed state, it dispatches an asynchronous command (via message bus) to recalculate or refresh the associated customer's business metrics, ensuring reporting data remains consistent after the subscription lifecycle change.

## Classes
- `SubscriptionClosed`

## Function Details

### `apply`

- **Parameters**: `Subscription $subscription`


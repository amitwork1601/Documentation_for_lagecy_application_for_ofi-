# SubscriptionOrderProcess.php

**Path**: `src\Subscription\Callback\SubscriptionOrderProcess.php`

## Summary
This class implements a state machine callback for processing subscription orders in a payment/billing system. It prepares subscription orders and dispatches commands to debit the subscription, with support for both normal and high-priority processing flows. The class logs activity and uses a message bus to handle the actual debit operations asynchronously, distinguishing between regular and prioritized subscription order processing.

## Classes
- `SubscriptionOrderProcess`

## Function Details

### `apply`

- **Parameters**: `SubscriptionOrder $subscriptionOrder`

### `applyHighPriority`

- **Parameters**: `SubscriptionOrder $subscriptionOrder`

### `prepare`

- **Parameters**: `SubscriptionOrder $subscriptionOrder`


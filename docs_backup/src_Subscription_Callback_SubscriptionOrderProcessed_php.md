# SubscriptionOrderProcessed.php

**Path**: `src\Subscription\Callback\SubscriptionOrderProcessed.php`

## Summary
This class implements a state machine callback that handles post-processing after a subscription order has been completed. When a subscription order is processed, it automatically dispatches commands to create the next subscription order in the cycle and update the subscription's next shipping date, enabling recurring subscription functionality.

## Classes
- `SubscriptionOrderProcessed`

## Function Details

### `__construct`

- **Parameters**: `private MessageBusInterface $messageBus`

### `apply`

- **Parameters**: `SubscriptionOrder $subscriptionOrder`


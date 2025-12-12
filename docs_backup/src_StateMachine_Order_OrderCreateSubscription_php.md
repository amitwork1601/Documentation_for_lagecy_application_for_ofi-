# OrderCreateSubscription.php

**Path**: `src\StateMachine\Order\OrderCreateSubscription.php`

## Summary
This class is a state machine callback that triggers subscription creation for orders containing subscription items. When invoked, it checks if the order has subscribed items (but isn't already a SubscriptionOrder), and if so, dispatches a `CreateSubscription` command via the message bus to asynchronously create the subscription using the order's token value.

## Classes
- `OrderCreateSubscription`

## Function Details

### `__construct`

- **Parameters**: `private MessageBusInterface $messageBus`

### `apply`

- **Parameters**: `Order $order`


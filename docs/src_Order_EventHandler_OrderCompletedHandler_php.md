# OrderCompletedHandler.php

**Path**: `src\Order\EventHandler\OrderCompletedHandler.php`

## Summary
This event handler listens for the `OrderCompleted` event in an e-commerce system and triggers the order confirmation email workflow. When an order is completed, it extracts the order token from the event and dispatches a `SendOrderConfirmation` command to the message bus, decoupling the order completion process from the email notification logic.

## Classes
- `OrderCompletedHandler`

## Function Details

### `__construct`

- **Parameters**: `private MessageBusInterface $bus`

### `__invoke`

- **Parameters**: `OrderCompleted $orderCompleted`


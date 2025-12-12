# SubscriptionNotification.php

**Path**: `src\Subscription\Callback\SubscriptionNotification.php`

## Summary
The `SubscriptionNotification` class serves as a state machine callback handler that dispatches email notifications and business updates related to subscription lifecycle events. It provides methods to trigger notifications for various subscription issues including unavailable pickup points, subscription terminations, out-of-stock products, and invalid shipments, using Symfony's message bus for asynchronous command processing. When a subscription is stopped, it also triggers an update to the customer's business report to reflect their subscriber status change.

## Classes
- `SubscriptionNotification`

## Function Details

### `__construct`

- **Parameters**: `private MessageBusInterface $messageBus`

### `sendPickuppointUnavailableEmail`

- **Parameters**: `SubscriptionOrder $subscriptionOrder`

### `sendSubscriptionStoppedEmail`

- **Parameters**: `Subscription $subscription`

### `sendSubscriptionOutOfStockEmail`

- **Parameters**: `SubscriptionOrder $subscriptionOrder`

### `sendShipmentInvalidEmail`

- **Parameters**: `SubscriptionOrder $subscriptionOrder`


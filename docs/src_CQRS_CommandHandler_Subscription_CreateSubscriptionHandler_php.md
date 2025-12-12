# CreateSubscriptionHandler.php

**Path**: `src\CQRS\CommandHandler\Subscription\CreateSubscriptionHandler.php`

## Summary
This handler processes the creation of subscriptions from orders in an e-commerce system. It converts completed orders containing subscription-eligible items into recurring subscription entities, including setting up payment instruments, creating initial subscription orders, scheduling next shipping dates, sending notification emails, and updating customer business reports. The handler orchestrates a multi-step workflow by dispatching additional commands to handle various aspects of subscription initialization and customer communication.

## Classes
- `CreateSubscriptionHandler`

## Function Details

### `__invoke`

- **Parameters**: `CreateSubscription $createSubscription`

### `getOrderItemsSubscriptionInterval`

- **Parameters**: `Collection $orderItems`
- **Description**: @param Collection&lt;array-key, OrderItemInterface&gt; $orderItems
/

### `getPaymentInstrument`

- **Parameters**: `Order $order`

### `addSubscriptionItems`

- **Parameters**: `Subscription $subscription, array $items`


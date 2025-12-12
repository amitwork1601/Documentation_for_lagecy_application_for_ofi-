# OrderAwaitingPayment.php

**Path**: `src\StateMachine\Order\OrderAwaitingPayment.php`

## Summary
This class handles the "awaiting payment" state in an order state machine workflow. It implements callback logic that executes when an order enters the awaiting payment state, including automatically transitioning cash-on-delivery orders to a "request payment on delivery" state, handling upcoming payments, and dispatching email notifications with payment instructions (bankwire, check, or payment success) based on the payment method selected.

## Classes
- `OrderAwaitingPayment`

## Function Details

### `apply`

- **Parameters**: `OrderInterface $order`

### `onCashOnDelivery`

- **Parameters**: `OrderInterface $order`

### `onUpcomingPayment`

- **Parameters**: `OrderInterface $order`

### `sendInstructionsEmail`

- **Parameters**: `OrderInterface $order`


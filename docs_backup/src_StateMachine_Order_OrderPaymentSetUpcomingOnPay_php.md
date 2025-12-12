# OrderPaymentSetUpcomingOnPay.php

**Path**: `src\StateMachine\Order\OrderPaymentSetUpcomingOnPay.php`

## Summary
This class is a state machine callback that handles payment state transitions for orders using the "upcoming_payment" gateway method. When an order is paid with an upcoming payment method (identified by gateway name or factory name), it redirects the order's payment state from the standard "paid" transition to a custom "upcoming_payment" state transition, allowing the system to track orders with deferred or scheduled payments differently from immediate payments.

## Classes
- `OrderPaymentSetUpcomingOnPay`

## Function Details

### `__construct`

- **Parameters**: `private StateMachineFactoryInterface $stateMachineFactory`

### `apply`

- **Parameters**: `OrderInterface $order`


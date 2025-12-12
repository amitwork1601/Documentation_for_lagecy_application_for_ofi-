# OrderPaymentSetUpcomingOnComplete.php

**Path**: `src\StateMachine\Order\OrderPaymentSetUpcomingOnComplete.php`

## Summary
This class is a state machine callback that automatically transitions orders to an "upcoming payment" state when the payment is completed using an "upcoming_payment" gateway. It checks if the order's last payment method uses the upcoming payment gateway, and if so, applies the `TRANSITION_REQUEST_UPCOMING_PAYMENT` state transition to handle deferred or future payment scenarios in the Sylius e-commerce system.

## Classes
- `OrderPaymentSetUpcomingOnComplete`

## Function Details

### `__construct`

- **Parameters**: `private StateMachineFactoryInterface $stateMachineFactory`

### `apply`

- **Parameters**: `OrderInterface $order`


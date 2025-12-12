# OrderCheckoutSelectPaymentSetUpcoming.php

**Path**: `src\StateMachine\Order\OrderCheckoutSelectPaymentSetUpcoming.php`

## Summary
This class handles the state machine transition for orders using the "upcoming_payment" gateway during checkout. When a payment method is selected, it checks if the gateway is configured as an upcoming payment type, and if so, triggers the `request_payment` transition which subsequently activates the `OrderAwaitingPayment` callback to apply the `request_upcoming_payment` transition. This appears to be part of a Sylius e-commerce system's payment flow customization for deferred or future payment processing.

## Classes
- `OrderCheckoutSelectPaymentSetUpcoming`

## Function Details

### `__construct`

- **Parameters**: `private StateMachineFactoryInterface $stateMachineFactory`

### `apply`

- **Parameters**: `OrderInterface $order`


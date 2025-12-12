# BeforeOrderAwaitingPayment.php

**Path**: `src\StateMachine\Order\BeforeOrderAwaitingPayment.php`

## Summary
This class handles state machine transitions for orders before they enter the "awaiting payment" state in an e-commerce system built on Sylius. Specifically, it checks if a payment uses the "Cash on Delivery" payment method and, if so, applies a special `TRANSITION_REQUEST_PAYMENT_ON_DELIVERY` transition to the order's payment state machine, allowing orders paid on delivery to follow a different workflow than standard pre-paid orders.

## Classes
- `BeforeOrderAwaitingPayment`

## Function Details

### `__construct`

- **Parameters**: `private StateMachineInterface $stateMachine`

### `apply`

- **Parameters**: `PaymentInterface $payment`


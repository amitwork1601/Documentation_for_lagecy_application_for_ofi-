# OrderCompletedAndPaid.php

**Path**: `src\StateMachine\Order\OrderCompletedAndPaid.php`

## Summary
This class implements a state machine callback that triggers post-payment actions when an order is both completed and paid. When invoked, it verifies the order's checkout and payment states, then dispatches two commands: sending an order confirmation email to the customer and updating the customer's business report statistics for tracking purchase history or metrics.

## Classes
- `OrderCompletedAndPaid`

## Function Details

### `apply`

- **Parameters**: `OrderInterface $order`

### `sendConfirmationEmail`

- **Parameters**: `OrderInterface $order`

### `isPaymentPaid`

- **Parameters**: `OrderInterface $order`


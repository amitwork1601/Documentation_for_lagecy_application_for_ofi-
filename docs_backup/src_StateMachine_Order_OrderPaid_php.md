# OrderPaid.php

**Path**: `src\StateMachine\Order\OrderPaid.php`

## Summary
This class implements a state machine callback that executes when an order payment is completed in an e-commerce system. It orchestrates several post-payment actions including sending payment success email notifications, tracking promotion coupon usage, updating customer business reports, and notifying an enterprise bus system about the order status. The class serves as a critical integration point that triggers downstream processes after successful payment processing.

## Classes
- `OrderPaid`

## Function Details

### `apply`

- **Parameters**: `OrderInterface $order`

### `sendPaymentSuccessEmail`

- **Parameters**: `Order $order`

### `checkPromotionCouponApplied`

- **Parameters**: `Order $order`


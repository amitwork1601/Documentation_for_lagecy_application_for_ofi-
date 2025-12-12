# OrderPaymentFail.php

**Path**: `src\StateMachine\Order\OrderPaymentFail.php`

## Summary
This state machine callback handles payment failure events for orders by dispatching appropriate email notifications based on the order type and payment method. When a payment fails, it determines whether the order is a subscription or regular order, then sends a specific email notification (PayPal-specific, subscription-specific, or generic payment failure) through the message bus to notify customers of the failed transaction.

## Classes
- `OrderPaymentFail`

## Function Details

### `apply`

- **Parameters**: `PaymentInterface $payment`

### `sendOrderPaymentFailEmail`

- **Parameters**: `OrderInterface $order, $paymentMethodCode`

### `sendSubscriptionPaymentFailEmail`

- **Parameters**: `OrderInterface $order`


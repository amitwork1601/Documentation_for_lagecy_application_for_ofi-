# RefundOrderAction.php

**Path**: `plugins\PayPalPlugin\src\Controller\Webhook\RefundOrderAction.php`

## Summary
This controller handles PayPal webhook requests for payment refunds by processing refund notifications and updating the payment state accordingly. When a refund webhook is received, it retrieves the associated payment using the PayPal order ID from the refund data, then uses a state machine to transition the payment to a refunded state and persists the changes. It's part of the PayPal plugin's webhook handling system that keeps Sylius payment states synchronized with PayPal transaction events.

## Classes
- `RefundOrderAction`

## Function Details

### `__invoke`

- **Parameters**: `Request $request`

### `getPayPalPaymentUrl`

- **Parameters**: `Request $request`


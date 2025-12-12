# CancelLastPayPalPaymentAction.php

**Path**: `plugins\PayPalPlugin\src\Controller\CancelLastPayPalPaymentAction.php`

## Summary
This controller handles the cancellation of the most recent PayPal payment for a Sylius e-commerce order. When invoked, it retrieves an order by token, applies a state machine transition to cancel its last payment, reprocesses the order's payment state, and persists the changes before returning a 204 No Content response.

## Classes
- `CancelLastPayPalPaymentAction`

## Function Details

### `__invoke`

- **Parameters**: `Request $request`


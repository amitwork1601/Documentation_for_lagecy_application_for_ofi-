# CancelPayPalPaymentAction.php

**Path**: `plugins\PayPalPlugin\src\Controller\CancelPayPalPaymentAction.php`

## Summary
This controller action handles the cancellation of PayPal payments in a Sylius e-commerce system. When invoked, it retrieves a payment by its PayPal order ID from the request, applies a cancellation state transition to the payment using a state machine, reprocesses the order's payment status, persists the changes, and returns a success message with a 204 No Content response.

## Classes
- `CancelPayPalPaymentAction`

## Function Details

### `__invoke`

- **Parameters**: `Request $request`


# CancelPayPalCheckoutPaymentAction.php

**Path**: `plugins\PayPalPlugin\src\Controller\CancelPayPalCheckoutPaymentAction.php`

## Summary
This controller action handles the cancellation of PayPal checkout payments when a transaction fails or is abandoned. It retrieves a payment by PayPal order ID from the request, sets an error flash message for the user, updates the payment state to cancelled through the payment state manager, and returns an empty 204 No Content response.

## Classes
- `CancelPayPalCheckoutPaymentAction`

## Function Details

### `__invoke`

- **Parameters**: `Request $request`


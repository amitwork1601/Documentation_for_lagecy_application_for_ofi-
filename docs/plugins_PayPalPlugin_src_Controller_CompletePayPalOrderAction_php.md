# CompletePayPalOrderAction.php

**Path**: `plugins\PayPalPlugin\src\Controller\CompletePayPalOrderAction.php`

## Summary
This controller handles the completion of PayPal payment orders in a Sylius e-commerce system. It retrieves an order by token, finds its last processing payment, marks the payment as complete via the payment state manager, and returns a JSON response containing the PayPal order ID, payment status, and a redirect URL to the order confirmation page.

## Classes
- `CompletePayPalOrderAction`

## Function Details

### `__invoke`

- **Parameters**: `Request $request`


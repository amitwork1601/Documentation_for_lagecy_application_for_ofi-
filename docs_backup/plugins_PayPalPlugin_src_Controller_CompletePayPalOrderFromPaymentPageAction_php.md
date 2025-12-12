# CompletePayPalOrderFromPaymentPageAction.php

**Path**: `plugins\PayPalPlugin\src\Controller\CompletePayPalOrderFromPaymentPageAction.php`

## Summary
This controller action completes a PayPal order payment from the payment page by processing the payment state and advancing the order through checkout. It retrieves an order by ID, marks its last processing payment as complete, then applies the checkout state machine transition to finalize the order, ultimately managing the payment completion workflow in the Sylius e-commerce PayPal integration.

## Classes
- `CompletePayPalOrderFromPaymentPageAction`

## Function Details

### `__invoke`

- **Parameters**: `Request $request`


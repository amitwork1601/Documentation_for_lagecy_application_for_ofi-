# CreatePayPalOrderFromCartAction.php

**Path**: `plugins\PayPalPlugin\src\Controller\CreatePayPalOrderFromCartAction.php`

## Summary
This controller action handles the creation of a PayPal order from a Sylius shopping cart by processing a payment request. It retrieves an order by ID, gets its last cart-state payment, and uses the capture payment resolver to initiate the PayPal payment flow, likely returning a JSON response with the PayPal order details or error information.

## Classes
- `CreatePayPalOrderFromCartAction`

## Function Details

### `__invoke`

- **Parameters**: `Request $request`


# CancelPayPalOrderAction.php

**Path**: `plugins\PayPalPlugin\src\Controller\CancelPayPalOrderAction.php`

## Summary
This controller handles the cancellation of PayPal orders in a Sylius e-commerce system. When invoked, it receives a PayPal order ID from the request, retrieves the corresponding payment and associated order, removes the order from the repository, adds a success flash message, and returns a 204 No Content response to indicate successful cancellation.

## Classes
- `CancelPayPalOrderAction`

## Function Details

### `__invoke`

- **Parameters**: `Request $request`


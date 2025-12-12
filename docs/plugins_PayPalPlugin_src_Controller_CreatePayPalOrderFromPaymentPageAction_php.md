# CreatePayPalOrderFromPaymentPageAction.php

**Path**: `plugins\PayPalPlugin\src\Controller\CreatePayPalOrderFromPaymentPageAction.php`

## Summary
This controller action handles the creation of a PayPal order from the payment page in a Sylius e-commerce checkout flow. It retrieves an order by ID, processes the last payment in CART state, and manages the payment state transitions through state machines while coordinating with PayPal's payment capture resolution system.

## Classes
- `CreatePayPalOrderFromPaymentPageAction`

## Function Details

### `__invoke`

- **Parameters**: `Request $request`


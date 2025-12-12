# UpdatePayPalOrderAction.php

**Path**: `plugins\PayPalPlugin\src\Controller\UpdatePayPalOrderAction.php`

## Summary
This controller action handles updating PayPal orders by synchronizing shipping address information between PayPal and Sylius e-commerce orders. It retrieves PayPal order details via API, creates/updates the shipping address in the Sylius order from PayPal's data, recalculates the order totals, and then sends the updated order information back to PayPal to keep both systems in sync during the checkout process.

## Classes
- `UpdatePayPalOrderAction`

## Function Details

### `__invoke`

- **Parameters**: `Request $request`


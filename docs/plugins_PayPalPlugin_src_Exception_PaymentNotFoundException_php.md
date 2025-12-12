# PaymentNotFoundException.php

**Path**: `plugins\PayPalPlugin\src\Exception\PaymentNotFoundException.php`

## Summary
This exception class is thrown when a payment record cannot be found for a given PayPal order ID within the Sylius PayPal plugin. It provides a named constructor `withPayPalOrderId()` that creates a descriptive error message indicating which specific PayPal order's payment is missing, facilitating debugging of payment synchronization issues between Sylius and PayPal systems.

## Classes
- `PaymentNotFoundException`

## Function Details

### `withPayPalOrderId`

- **Parameters**: `string $payPalOrderId`


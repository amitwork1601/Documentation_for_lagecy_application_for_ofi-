# PaymentNotFoundException.php

**Path**: `src\Exception\CheckoutCom\PaymentNotFoundException.php`

## Summary
This is a custom exception class for handling cases where a Checkout.com payment cannot be found in the system. It provides a named constructor `withCheckoutComPaymentId()` that creates a descriptive error message including the specific Checkout.com payment ID that failed to be located, enabling clearer error reporting and debugging in payment processing workflows.

## Classes
- `PaymentNotFoundException`

## Function Details

### `withCheckoutComPaymentId`

- **Parameters**: `string $checkoutComPaymentId`


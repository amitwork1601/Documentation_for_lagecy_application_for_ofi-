# CheckoutStateResolver.php

**Path**: `src\StateMachine\StateResolver\CheckoutStateResolver.php`

## Summary
The `CheckoutStateResolver` is a decorator for Sylius's checkout state resolver that handles special transitions when payment becomes required after initially being skipped. Specifically, it detects when an order's total becomes greater than zero while in the `PAYMENT_SKIPPED` state and automatically transitions the order back to the address state if payment method selection is now required, ensuring the checkout process correctly re-engages payment collection.

## Classes
- `CheckoutStateResolver`

## Function Details

### `resolve`

- **Parameters**: `BaseOrderInterface $order`


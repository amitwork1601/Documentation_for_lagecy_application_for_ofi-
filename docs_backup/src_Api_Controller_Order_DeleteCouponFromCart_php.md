# DeleteCouponFromCart.php

**Path**: `src\Api\Controller\Order\DeleteCouponFromCart.php`

## Summary
This API controller handles the removal of coupon/promotion codes from a shopping cart in an e-commerce system. It locates the cart by token, dispatches a command to remove the specified coupon, and if the cart was in a payment-skipped checkout state, it resets the checkout state back to unaddressed to ensure proper recalculation of totals without the coupon discount.

## Classes
- `DeleteCouponFromCart`

## Function Details

### `__invoke`

- **Parameters**: `Request $request`


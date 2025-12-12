# ApplyCouponToCartHandler.php

**Path**: `src\Api\CommandHandler\Cart\ApplyCouponToCartHandler.php`

## Summary
This handler processes the application of promotional coupon codes to shopping carts in an e-commerce system. It retrieves a cart by token, applies thread-safe locking during the coupon assignment operation, assigns the promotion code to the order, and for authenticated shop users, triggers a command to reset the checkout state back to an unaddressed status (since promotions may affect shipping costs or availability).

## Classes
- `ApplyCouponToCartHandler`

## Function Details

### `__invoke`

- **Parameters**: `ApplyCouponToCart $command`


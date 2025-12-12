# RemoveCouponFromCartHandler.php

**Path**: `src\Api\CommandHandler\Cart\RemoveCouponFromCartHandler.php`

## Summary
This command handler removes a promotional coupon code from a shopping cart in an e-commerce system. It retrieves the cart by token, acquires a lock to prevent concurrent modifications, uses the OrderPromotionCodeAssigner to remove the specified coupon code, then releases the lock and returns the updated cart.

## Classes
- `RemoveCouponFromCartHandler`

## Function Details

### `__invoke`

- **Parameters**: `RemoveCouponFromCart $command`


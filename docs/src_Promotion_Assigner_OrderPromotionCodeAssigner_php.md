# OrderPromotionCodeAssigner.php

**Path**: `src\Promotion\Assigner\OrderPromotionCodeAssigner.php`

## Summary
The `OrderPromotionCodeAssigner` class manages the application of promotion coupon codes to orders in an e-commerce system. It implements a feature-flagged dual approach: either integrating with the TalonOne external promotion service or using the internal Sylius promotion system to validate and apply coupons. The class handles coupon validation, availability checking, order processing after coupon application, and manages the removal of free products when coupons are changed or removed.

## Classes
- `OrderPromotionCodeAssigner`

## Function Details

### `assign`

- **Parameters**: `Order $cart, string $couponCode`

### `assignPromotionFromTalonOneCoupon`

- **Parameters**: `Order $cart, string $couponCode`

### `assignPromotionCoupon`

- **Parameters**: `Order $cart, PromotionCouponInterface|PromotionCoupon $promotionCoupon`

### `getPromotionCoupon`

- **Parameters**: `string $code`

### `unassign`

- **Parameters**: `Order $cart, string $couponCode`

### `unassignPromotionFromTalonOneCoupon`

- **Parameters**: `Order $cart, string $couponCode`


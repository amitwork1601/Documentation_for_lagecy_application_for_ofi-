# PromotionCouponRepositoryInterface.php

**Path**: `src\Repository\Promotion\PromotionCouponRepositoryInterface.php`

## Summary
This interface extends Sylius's base promotion coupon repository to add custom query capabilities for the application's promotion system. It defines an additional method `findActiveByPromotion()` that retrieves all active coupons associated with a specific promotion, enabling filtering of coupons by both their promotion relationship and active status. This extension allows the application to efficiently query only valid, usable coupons for a given promotion rather than all coupons regardless of state.

## Function Details

### `findActiveByPromotion`

- **Parameters**: `Promotion $promotion`


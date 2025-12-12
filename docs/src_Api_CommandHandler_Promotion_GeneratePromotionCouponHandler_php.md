# GeneratePromotionCouponHandler.php

**Path**: `src\Api\CommandHandler\Promotion\GeneratePromotionCouponHandler.php`

## Summary
This command handler generates multiple promotion coupons for a specific coupon-based promotion in an e-commerce system. It validates that the promotion exists and is coupon-based, then uses a generator to create coupons with specified parameters (quantity, prefix/suffix, expiration, usage limits, etc.) and associates them with the promotion entity.

## Classes
- `GeneratePromotionCouponHandler`

## Function Details

### `__invoke`

- **Parameters**: `GeneratePromotionCoupon $command`


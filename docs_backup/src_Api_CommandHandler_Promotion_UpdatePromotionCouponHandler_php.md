# UpdatePromotionCouponHandler.php

**Path**: `src\Api\CommandHandler\Promotion\UpdatePromotionCouponHandler.php`

## Summary
This command handler updates an existing promotion coupon's properties (usage limits, expiration date, and reusability settings) within a specific promotion in an e-commerce system. It validates that both the promotion and coupon exist by their codes, then applies the updates to the coupon entity, throwing exceptions if either resource is not found.

## Classes
- `UpdatePromotionCouponHandler`

## Function Details

### `__invoke`

- **Parameters**: `UpdatePromotionCoupon $command`


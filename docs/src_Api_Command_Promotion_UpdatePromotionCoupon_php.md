# UpdatePromotionCoupon.php

**Path**: `src\Api\Command\Promotion\UpdatePromotionCoupon.php`

## Summary
This class represents a command for updating an existing promotion coupon in the system. It extends `AbstractPromotionCoupon` and includes attributes for identifying both the promotion and specific coupon to update, along with configurable properties like usage limits, expiration dates, code generation parameters (length, prefix, suffix), and reusability settings for cancelled orders. The class uses PHP attributes (`PromotionCodeAware` and `PromotionCouponCodeAware`) to enforce validation or provide metadata about the promotion and coupon code identifiers.

## Classes
- `UpdatePromotionCoupon`


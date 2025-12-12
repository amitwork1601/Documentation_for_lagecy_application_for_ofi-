# CreatePromotionCouponValidator.php

**Path**: `src\Validator\Promotion\CreatePromotionCouponValidator.php`

## Summary
This validator ensures that promotion coupons can only be created for valid, coupon-based promotions. It performs three key validations: checks that the coupon code length is within acceptable limits, verifies that the associated promotion exists and supports coupons, and ensures that the coupon code is unique and not already in use in the system.

## Classes
- `CreatePromotionCouponValidator`

## Function Details

### `validate`

- **Parameters**: `$value, Constraint $constraint`

### `isUsedCode`

- **Parameters**: `string $code`

### `checkCodeLength`

- **Parameters**: `AbstractPromotionCoupon $value`


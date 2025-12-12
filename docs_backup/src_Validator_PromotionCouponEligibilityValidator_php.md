# PromotionCouponEligibilityValidator.php

**Path**: `src\Validator\PromotionCouponEligibilityValidator.php`

## Summary
This validator ensures that promotion coupons applied to orders meet eligibility requirements before being accepted. It supports two validation paths: a legacy Sylius-based promotion system that checks coupon validity, usage limits, and order eligibility, and a feature-flagged TalonOne integration for external coupon management. The validator is part of the cart/order checkout process to prevent invalid or ineligible coupon codes from being applied to customer orders.

## Classes
- `PromotionCouponEligibilityValidator`

## Function Details

### `validate`

- **Parameters**: `$value, Constraint $constraint`

### `validatePromotionCouponEligibility`

- **Parameters**: `OrderPromotionCoupon $orderPromotionCoupon, Constraint $constraint`

### `validateTalonOneCouponEligibility`

- **Parameters**: `OrderPromotionCoupon $orderPromotionCoupon, PromotionCouponEligibility $constraint`


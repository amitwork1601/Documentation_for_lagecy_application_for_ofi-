# PromotionSubjectCouponEligibilityChecker.php

**Path**: `src\Promotion\Checker\Eligibility\PromotionSubjectCouponEligibilityChecker.php`

## Summary
This class is a decorator that checks whether a promotion subject (specifically an Order) is eligible for a coupon-based promotion by validating if the order has any valid promotion coupons attached to it. It extends Sylius's promotion eligibility checking by iterating through all coupons on an order and determining if any match the promotion and pass the coupon eligibility validation, returning true only if a valid matching coupon is found.

## Classes
- `PromotionSubjectCouponEligibilityChecker`

## Function Details

### `isEligible`

- **Parameters**: `PromotionSubjectInterface $promotionSubject, PromotionInterface $promotion`


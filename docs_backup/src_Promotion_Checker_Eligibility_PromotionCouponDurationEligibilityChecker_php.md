# PromotionCouponDurationEligibilityChecker.php

**Path**: `src\Promotion\Checker\Eligibility\PromotionCouponDurationEligibilityChecker.php`

## Summary
This class is a decorator that extends Sylius promotion coupon eligibility checking to handle subscription-based orders. It specifically validates whether a promotion coupon is still valid at the time of a subscription's next shipping date, rather than just at the current order time, ensuring coupons don't expire before recurring subscription orders are fulfilled.

## Classes
- `PromotionCouponDurationEligibilityChecker`

## Function Details

### `isEligible`

- **Parameters**: `PromotionSubjectInterface $promotionSubject, PromotionCouponInterface $promotionCoupon`

### `isEligibleAtSubscriptionNextShippingAt`

- **Parameters**: `SubscriptionOrder $subscriptionOrder, PromotionCouponInterface $promotionCoupon`


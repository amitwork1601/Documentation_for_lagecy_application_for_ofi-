# PromotionDurationEligibilityChecker.php

**Path**: `src\Promotion\Checker\Eligibility\PromotionDurationEligibilityChecker.php`

## Summary
This class decorates Sylius's promotion duration eligibility checker to add custom logic for subscription-based orders. It checks if a promotion is valid by comparing the promotion's start/end dates against the subscription's next shipping date, rather than the current date, ensuring promotions are applied correctly for recurring subscription orders. For non-subscription orders, it delegates to the standard Sylius duration eligibility checker.

## Classes
- `PromotionDurationEligibilityChecker`

## Function Details

### `isEligible`

- **Parameters**: `PromotionSubjectInterface $promotionSubject, PromotionInterface $promotion`

### `isEligibleAtSubscriptionNextShippingAt`

- **Parameters**: `SubscriptionOrder $subscriptionOrder, PromotionInterface $promotion`


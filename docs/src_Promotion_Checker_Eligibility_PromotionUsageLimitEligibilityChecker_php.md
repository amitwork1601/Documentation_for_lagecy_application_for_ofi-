# PromotionUsageLimitEligibilityChecker.php

**Path**: `src\Promotion\Checker\Eligibility\PromotionUsageLimitEligibilityChecker.php`

## Summary
This class checks whether a promotion is eligible to be applied based on its usage limit. It decorates Sylius's default usage limit eligibility checker and returns true if the promotion has no usage limit set, or if the number of times the promotion has been used is less than its configured maximum usage limit, preventing over-application of limited-use promotions.

## Classes
- `PromotionUsageLimitEligibilityChecker`

## Function Details

### `isEligible`

- **Parameters**: `PromotionSubjectInterface $promotionSubject, PromotionInterface $promotion`
- **Description**: @param Promotion $promotion
/


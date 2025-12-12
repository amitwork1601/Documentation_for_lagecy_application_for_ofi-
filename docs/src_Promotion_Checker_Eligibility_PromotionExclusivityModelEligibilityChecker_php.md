# PromotionExclusivityModelEligibilityChecker.php

**Path**: `src\Promotion\Checker\Eligibility\PromotionExclusivityModelEligibilityChecker.php`

## Summary
This class implements a promotion eligibility checker that enforces exclusivity rules for promotions in an e-commerce system. It prevents stacking of promotions based on their exclusive mode: "restricted" promotions cannot be applied if any other promotion exists, while "default" promotions cannot be combined with other default promotions of the same priority. The checker ensures that promotion combinations respect business rules for exclusive and compatible promotion types.

## Classes
- `PromotionExclusivityModelEligibilityChecker`

## Function Details

### `isEligible`

- **Parameters**: `PromotionSubjectInterface $promotionSubject, PromotionInterface $promotion`


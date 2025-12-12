# PromotionCouponEligibility.php

**Path**: `src\Validator\PromotionCouponEligibility.php`

## Summary
This is a Symfony validation constraint class for verifying promotion coupon eligibility in what appears to be a Sylius e-commerce application. It defines a class-level constraint that delegates the actual validation logic to `PromotionCouponEligibilityValidator`, allowing the system to validate whether a promotion coupon can be applied to a given context (likely checking usage limits, expiration dates, and other eligibility rules). The constraint is applied at the class level rather than to individual properties, enabling complex validation across multiple fields of an entity.

## Classes
- `PromotionCouponEligibility`

## Function Details

### `validatedBy`


### `getTargets`



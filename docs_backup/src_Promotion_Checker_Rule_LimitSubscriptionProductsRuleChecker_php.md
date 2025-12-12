# LimitSubscriptionProductsRuleChecker.php

**Path**: `src\Promotion\Checker\Rule\LimitSubscriptionProductsRuleChecker.php`

## Summary
This is a Sylius promotion rule checker that determines if an order is eligible for a promotion based on whether it contains subscription products. The checker iterates through order items and returns true if any item has a subscription interval set, effectively limiting the promotion to orders that include subscribable/recurring products.

## Classes
- `LimitSubscriptionProductsRuleChecker`

## Function Details

### `isEligible`

- **Parameters**: `PromotionSubjectInterface $subject, array $configuration`


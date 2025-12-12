# LimitNonSubscriptionProductsRuleChecker.php

**Path**: `src\Promotion\Checker\Rule\LimitNonSubscriptionProductsRuleChecker.php`

## Summary
This class implements a promotion rule checker that determines if an order is eligible for a promotion based on the presence of non-subscription products. The checker returns true only if the order contains at least one item without a subscription interval, effectively limiting certain promotions to orders that include regular (non-subscription) products.

## Classes
- `LimitNonSubscriptionProductsRuleChecker`

## Function Details

### `isEligible`

- **Parameters**: `PromotionSubjectInterface $subject, array $configuration`


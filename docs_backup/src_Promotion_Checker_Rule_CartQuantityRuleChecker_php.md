# CartQuantityRuleChecker.php

**Path**: `src\Promotion\Checker\Rule\CartQuantityRuleChecker.php`

## Summary
This class implements a promotion rule checker that validates whether a shopping cart's total quantity meets specific criteria for promotion eligibility. It checks if the cart's item count equals, is greater than or equal to, or less than or equal to a configured threshold value, depending on whether a minimum or maximum constraint is specified in the configuration.

## Classes
- `CartQuantityRuleChecker`

## Function Details

### `isEligible`

- **Parameters**: `PromotionSubjectInterface $subject, array $configuration`


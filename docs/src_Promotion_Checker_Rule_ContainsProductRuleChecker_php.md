# ContainsProductRuleChecker.php

**Path**: `src\Promotion\Checker\Rule\ContainsProductRuleChecker.php`

## Summary
This class implements a promotion rule checker that determines if an order contains a specific product by its product code. It iterates through all non-empty order items and returns true if any item's product code matches the configured product code in the promotion rule, enabling product-specific promotional eligibility in the e-commerce system.

## Classes
- `ContainsProductRuleChecker`

## Function Details

### `isEligible`

- **Parameters**: `PromotionSubjectInterface $subject, array $configuration`
- **Description**: @throws UnsupportedTypeException
/


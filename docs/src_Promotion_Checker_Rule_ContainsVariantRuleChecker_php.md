# ContainsVariantRuleChecker.php

**Path**: `src\Promotion\Checker\Rule\ContainsVariantRuleChecker.php`

## Summary
This is a promotion rule checker that determines if an order contains a specific product variant. It iterates through all order items and compares their variant codes against a configured variant, returning true if a match is found, which allows promotions to be applied based on the presence of particular product variants in the shopping cart.

## Classes
- `ContainsVariantRuleChecker`

## Function Details

### `isEligible`

- **Parameters**: `PromotionSubjectInterface $subject, array $configuration`
- **Description**: @throws UnsupportedTypeException
/


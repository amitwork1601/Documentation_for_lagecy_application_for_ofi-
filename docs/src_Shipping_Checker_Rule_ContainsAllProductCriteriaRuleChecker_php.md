# ContainsAllProductCriteriaRuleChecker.php

**Path**: `src\Shipping\Checker\Rule\ContainsAllProductCriteriaRuleChecker.php`

## Summary
This class is a shipping method rule checker that determines if **all** products in an order meet specified product criteria. It extends a base product criteria checker and returns `true` only when every order item matches the configured criteria (such as specific products, categories, or attributes), making it useful for shipping rules that require all items to qualify rather than just some items.

## Classes
- `ContainsAllProductCriteriaRuleChecker`

## Function Details

### `isEligible`

- **Parameters**: `ShippingSubjectInterface $subject, array $configuration`


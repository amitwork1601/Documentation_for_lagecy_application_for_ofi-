# ContainsAtLeastOneProductCriteriaRuleChecker.php

**Path**: `src\Shipping\Checker\Rule\ContainsAtLeastOneProductCriteriaRuleChecker.php`

## Summary
This is a shipping method rule checker that determines if an order is eligible for a specific shipping method based on whether it contains at least one product matching configured criteria. It extends a base `ProductCriteriaRuleChecker` class and iterates through order items, returning true as soon as any item matches the specified product criteria (such as specific products, categories, or attributes), making it useful for conditional shipping options like "free shipping if cart contains promotional items."

## Classes
- `ContainsAtLeastOneProductCriteriaRuleChecker`

## Function Details

### `isEligible`

- **Parameters**: `ShippingSubjectInterface $subject, array $configuration`


# ContainsNoProductCriteriaRuleChecker.php

**Path**: `src\Shipping\Checker\Rule\ContainsNoProductCriteriaRuleChecker.php`

## Summary
This class implements a shipping method rule checker that determines if an order is eligible for a specific shipping method by verifying that the order **does not contain** any products matching specified criteria. It extends `ProductCriteriaRuleChecker` and returns `false` if any order item matches the configured product criteria (e.g., specific products, categories, or attributes), ensuring certain products can be excluded from particular shipping methods.

## Classes
- `ContainsNoProductCriteriaRuleChecker`

## Function Details

### `isEligible`

- **Parameters**: `ShippingSubjectInterface $subject, array $configuration`


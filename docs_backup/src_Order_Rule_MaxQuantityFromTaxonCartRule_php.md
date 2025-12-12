# MaxQuantityFromTaxonCartRule.php

**Path**: `src\Order\Rule\MaxQuantityFromTaxonCartRule.php`

## Summary
This class implements a cart validation rule that enforces a maximum quantity limit for products belonging to a specific taxon (product category). It checks if the total quantity of items from a configured taxon in an order exceeds the specified threshold, preventing customers from adding too many items from that category to their cart. The rule is channel-specific and returns a translated error message when the maximum quantity is violated.

## Classes
- `MaxQuantityFromTaxonCartRule`

## Function Details

### `mayBeAppliedOnOrder`

- **Parameters**: `OrderInterface $order, OrderRuleConditionInterface $condition`

### `validate`

- **Parameters**: `OrderInterface $order, OrderRuleConditionInterface $condition, bool $ignoreMinimumAmount = false`

### `getErrorMessage`



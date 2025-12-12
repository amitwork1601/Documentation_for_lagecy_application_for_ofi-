# AmountUntilOnTaxonCartRule.php

**Path**: `src\Order\Rule\AmountUntilOnTaxonCartRule.php`

## Summary
This class implements a cart validation rule that enforces a minimum order amount requirement when items from a specific taxon (product category) are present in the cart. It checks if the order contains items from a configured taxon and validates that the total order amount meets the minimum threshold for that channel, returning true only when the amount requirement is satisfied or when items from the specified taxon are absent.

## Classes
- `AmountUntilOnTaxonCartRule`

## Function Details

### `mayBeAppliedOnOrder`

- **Parameters**: `OrderInterface $order, OrderRuleConditionInterface $condition`

### `validate`

- **Parameters**: `OrderInterface $order, OrderRuleConditionInterface $condition, bool $ignoreMinimumAmount = false`

### `getErrorMessage`



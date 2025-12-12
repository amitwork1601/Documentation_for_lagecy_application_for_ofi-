# ItemUnavailableCartRule.php

**Path**: `src\Order\Rule\ItemUnavailableCartRule.php`

## Summary
This class implements a cart validation rule that checks if all items in an order are available for purchase. It extends `CartRuleAbstract` and applies specifically to orders in the cart state, using the `IsItemAvailableChecker` to verify item availability and returning a translated error message when items are unavailable.

## Classes
- `ItemUnavailableCartRule`

## Function Details

### `mayBeAppliedOnOrder`

- **Parameters**: `OrderInterface $order, OrderRuleConditionInterface $condition`

### `validate`

- **Parameters**: `OrderInterface|Order $order, OrderRuleConditionInterface $condition`

### `getErrorMessage`



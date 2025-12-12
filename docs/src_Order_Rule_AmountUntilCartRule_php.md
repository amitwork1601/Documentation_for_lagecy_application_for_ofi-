# AmountUntilCartRule.php

**Path**: `src\Order\Rule\AmountUntilCartRule.php`

## Summary
This class implements a cart rule validation that checks if an order's total amount is below a specified threshold for a given sales channel. It validates orders by comparing the total order items value against a configured minimum amount per channel, returning false (invalid) only when the cart total is less than the required minimum, typically used to enforce minimum purchase requirements or trigger promotional rules based on cart value thresholds.

## Classes
- `AmountUntilCartRule`

## Function Details

### `mayBeAppliedOnOrder`

- **Parameters**: `OrderInterface $order, OrderRuleConditionInterface $condition`

### `validate`

- **Parameters**: `OrderInterface $order, OrderRuleConditionInterface $condition`

### `getErrorMessage`



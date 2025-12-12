# CartRulesValidityChecker.php

**Path**: `src\Order\Rule\Checker\CartRulesValidityChecker.php`

## Summary
This class validates cart/order rules by checking if an order meets various configurable conditions defined for a specific sales channel. It retrieves enabled order rules from the repository, iterates through each rule's conditions, and uses registered cart rule validators to determine if the order satisfies those conditions, collecting any violations into a `RuleViolationList` for reporting failed validations.

## Classes
- `CartRulesValidityChecker`

## Function Details

### `validate`

- **Parameters**: `OrderInterface $order`


# RemoveCartEligibilityValidator.php

**Path**: `src\Validator\RemoveCartEligibilityValidator.php`

## Summary
This validator ensures that a shopping cart is eligible for removal by checking three business rules: the cart must exist, it must not be a completed order, and it must not be a subscription order. It validates `RemoveCartCommand` objects by querying the order repository and adding violation messages when any of these deletion constraints are violated.

## Classes
- `RemoveCartEligibilityValidator`

## Function Details

### `__construct`

- **Parameters**: `private readonly OrderRepository $orderRepository`

### `validate`

- **Parameters**: `$value, Constraint $constraint`


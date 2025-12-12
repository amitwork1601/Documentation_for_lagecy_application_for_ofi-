# ChangeItemQuantityInCartEligibilityValidator.php

**Path**: `src\Validator\ChangeItemQuantityInCartEligibilityValidator.php`

## Summary
This validator ensures that cart item quantity changes comply with business rules by checking against two configurable limits: a maximum quantity per individual item and a maximum total quantity across all items in the cart. It validates quantity change requests for non-admin users, retrieving the cart and specific order item to enforce these limits and add validation violations when thresholds are exceeded.

## Classes
- `ChangeItemQuantityInCartEligibilityValidator`

## Function Details

### `validate`

- **Parameters**: `$value, Constraint $constraint`


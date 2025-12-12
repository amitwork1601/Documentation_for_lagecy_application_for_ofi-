# ItemQuantitySubscriptionOrderValidator.php

**Path**: `src\Validator\Subscription\ItemQuantitySubscriptionOrderValidator.php`

## Summary
This validator ensures that item quantity changes in subscription orders are valid by verifying that the specified order item and its associated product variant exist in the subscription cart. It extends an abstract product variant validator and validates the `ChangeItemQuantitySubscriptionOrder` command by checking if the order item can be found by its ID and cart token, and confirms the item has a valid product variant before allowing quantity modifications.

## Classes
- `ItemQuantitySubscriptionOrderValidator`

## Function Details

### `validate`

- **Parameters**: `$value, Constraint $constraint`


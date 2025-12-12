# AddItemToCartQuantityEligibility.php

**Path**: `src\Validator\AddItemToCartQuantityEligibility.php`

## Summary
This is a Symfony validation constraint class that enforces quantity eligibility rules when adding items to a shopping cart. It acts as a class-level constraint (applied to entire objects rather than individual properties) and delegates the actual validation logic to `AddItemToCartQuantityEligibilityValidator`. This constraint likely validates business rules such as stock availability, minimum/maximum order quantities, or other cart-specific quantity restrictions before allowing items to be added.

## Classes
- `AddItemToCartQuantityEligibility`

## Function Details

### `validatedBy`


### `getTargets`



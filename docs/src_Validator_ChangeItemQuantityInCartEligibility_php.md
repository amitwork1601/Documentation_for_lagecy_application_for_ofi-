# ChangeItemQuantityInCartEligibility.php

**Path**: `src\Validator\ChangeItemQuantityInCartEligibility.php`

## Summary
This is a Symfony validation constraint class that defines a validator for checking if an item's quantity can be changed in a shopping cart. It acts as a marker/configuration class that delegates the actual validation logic to `ChangeItemQuantityInCartEligibilityValidator` and operates at the class level (rather than property level), meaning it validates the entire object representing a cart quantity change operation.

## Classes
- `ChangeItemQuantityInCartEligibility`

## Function Details

### `validatedBy`


### `getTargets`



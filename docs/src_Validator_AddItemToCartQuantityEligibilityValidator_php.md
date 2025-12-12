# AddItemToCartQuantityEligibilityValidator.php

**Path**: `src\Validator\AddItemToCartQuantityEligibilityValidator.php`

## Summary
This validator enforces quantity limits when adding items to a shopping cart in an e-commerce system. It checks that the requested quantity doesn't exceed both per-item and total cart quantity limits (configured via parameters), while exempting admin users from these restrictions. The validator retrieves the cart by token, validates the product variant exists, and likely compares existing cart quantities against the configured thresholds to prevent excessive ordering.

## Classes
- `AddItemToCartQuantityEligibilityValidator`

## Function Details

### `validate`

- **Parameters**: `mixed $value, Constraint $constraint`


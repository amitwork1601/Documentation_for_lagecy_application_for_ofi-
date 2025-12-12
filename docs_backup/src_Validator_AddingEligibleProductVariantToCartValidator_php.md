# AddingEligibleProductVariantToCartValidator.php

**Path**: `src\Validator\AddingEligibleProductVariantToCartValidator.php`

## Summary
This validator ensures that a product variant being added to a shopping cart is eligible for purchase. It retrieves the product variant from an IRI, fetches the corresponding cart by token, and verifies eligibility rules (likely checking availability, channel restrictions, or other business constraints) before allowing the item to be added to the cart.

## Classes
- `AddingEligibleProductVariantToCartValidator`

## Function Details

### `validate`

- **Parameters**: `mixed $value, Constraint $constraint`


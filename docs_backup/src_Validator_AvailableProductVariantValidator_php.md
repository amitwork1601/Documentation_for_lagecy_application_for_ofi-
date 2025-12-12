# AvailableProductVariantValidator.php

**Path**: `src\Validator\AvailableProductVariantValidator.php`

## Summary
This validator ensures that a product variant is available for purchase in the current shopping cart context within a Sylius e-commerce application. It extends an abstract validator to perform verification checks on ProductVariant entities, validating availability constraints against the current cart/order before allowing the variant to be added or processed.

## Classes
- `AvailableProductVariantValidator`

## Function Details

### `validate`

- **Parameters**: `mixed $value, Constraint $constraint`


# ProductVariantCombinationValidator.php

**Path**: `src\Validator\ProductVariant\ProductVariantCombinationValidator.php`

## Summary
This validator decorator extends Sylius's product variant combination validation to ensure product variants have unique option combinations. It checks if a product variant's option combination already exists among other variants of the same product, preventing duplicate variant configurations (e.g., two "Large Red" t-shirt variants). The validator only performs checks when the product has both variants and options defined, using a parity checker to detect duplicate combinations and adding a violation if found.

## Classes
- `ProductVariantCombinationValidator`

## Function Details

### `validate`

- **Parameters**: `$value, Constraint $constraint`


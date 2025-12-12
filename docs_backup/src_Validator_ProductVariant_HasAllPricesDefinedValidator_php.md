# HasAllPricesDefinedValidator.php

**Path**: `src\Validator\ProductVariant\HasAllPricesDefinedValidator.php`

## Summary
This validator ensures that product variants have prices defined for all channels associated with their parent product. It decorates Sylius's core `HasAllPricesDefined` validator to add custom logic that reloads entities from the database when needed and validates that each channel assigned to a product has a corresponding non-null price set on the variant, triggering a validation violation if any channel pricing is missing.

## Classes
- `HasAllPricesDefinedValidator`

## Function Details

### `validate`

- **Parameters**: `$value, Constraint $constraint`


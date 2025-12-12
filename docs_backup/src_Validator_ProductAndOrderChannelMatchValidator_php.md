# ProductAndOrderChannelMatchValidator.php

**Path**: `src\Validator\ProductAndOrderChannelMatchValidator.php`

## Summary
This validator ensures that a product variant and an order belong to the same sales channel in a Sylius e-commerce system. It retrieves a product variant and order from their respective repositories, then checks if the product is available in the order's channel, raising a validation violation if they don't match to prevent cross-channel order items.

## Classes
- `ProductAndOrderChannelMatchValidator`

## Function Details

### `validate`

- **Parameters**: `$value, Constraint $constraint`


# AbstractProductVariantValidator.php

**Path**: `src\Validator\AbstractProductVariantValidator.php`

## Summary
This abstract validator class provides common validation logic for product variants in an e-commerce context, specifically checking if products and variants are enabled and in stock before they can be added to a cart. It handles special cases for subscription orders versus regular orders, verifying stock availability (sold out, partially sold out) and enforcing business rules around when authenticated users can purchase out-of-stock items, adding appropriate validation violations when conditions aren't met.

## Classes
- `AbstractProductVariantValidator`

## Function Details

### `__construct`

- **Parameters**: `protected UserContextInterface $userContext`

### `verify`

- **Parameters**: `ProductVariant $productVariant, OrderInterface $cart, Constraint $constraint`


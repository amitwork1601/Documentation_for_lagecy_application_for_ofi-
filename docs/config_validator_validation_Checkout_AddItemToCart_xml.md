# AddItemToCart.xml

**Path**: `config\validator\validation\Checkout\AddItemToCart.xml`

## Summary
This Symfony validation configuration file defines validation rules for the `AddItemToCart` command in an e-commerce checkout process. It enforces three custom business constraints (eligible product variants, matching product/order channels, and quantity eligibility) plus a minimum quantity requirement of 1 for cart items. All validations are grouped under "sylius", indicating this is part of a Sylius e-commerce platform implementation that ensures cart operations meet business rules before execution.


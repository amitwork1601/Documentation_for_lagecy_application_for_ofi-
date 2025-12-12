# ProductVariantPricesCalculatorInterface.php

**Path**: `src\Calculator\ProductVariantPricesCalculatorInterface.php`

## Summary
This interface extends Sylius's core product variant price calculator to add subscription-based pricing capabilities and tax calculation features. It defines two additional methods: one for calculating subscription prices for product variants based on context, and another for retrieving both taxed and non-taxed price variations. This interface exists to support e-commerce scenarios where products can be sold via subscription models and require transparent tax handling.

## Function Details

### `calculateSubscriptionPrice`

- **Parameters**: `ProductVariantInterface $productVariant, array $context`

### `getPricesWithAndWithoutTaxes`

- **Parameters**: `int $price, ProductVariantInterface $productVariant`


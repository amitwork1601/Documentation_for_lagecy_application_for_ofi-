# AddProductDiscountConfigurationType.php

**Path**: `src\Form\Type\Promotion\Action\AddProductDiscountConfigurationType.php`

## Summary
This Symfony form type configures a promotion action for adding product variant discounts in an e-commerce system. It handles the transformation between product variant codes (stored format) and ProductVariantInterface objects (displayed format) using a bidirectional transformer, and validates that a product variant is selected before submission. The form integrates with Sylius e-commerce framework's product variant repository to enable promotional discounts on specific product variants.

## Classes
- `AddProductDiscountConfigurationType`

## Function Details

### `__construct`

- **Parameters**: `RepositoryInterface $productVariantRepository`

### `buildForm`

- **Parameters**: `FormBuilderInterface $builder, array $options`


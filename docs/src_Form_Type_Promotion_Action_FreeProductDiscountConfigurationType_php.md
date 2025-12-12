# FreeProductDiscountConfigurationType.php

**Path**: `src\Form\Type\Promotion\Action\FreeProductDiscountConfigurationType.php`

## Summary
This Symfony form type configures promotional actions that offer free product variants as discounts. It handles the bidirectional transformation between product variant codes (stored as strings) and ProductVariantInterface objects, using a repository to load variants by code, and validates that a variant selection is mandatory when the form is submitted.

## Classes
- `FreeProductDiscountConfigurationType`

## Function Details

### `__construct`

- **Parameters**: `RepositoryInterface $productVariantRepository`

### `buildForm`

- **Parameters**: `FormBuilderInterface $builder, array $options`


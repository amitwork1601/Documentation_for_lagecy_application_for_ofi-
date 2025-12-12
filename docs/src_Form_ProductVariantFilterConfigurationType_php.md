# ProductVariantFilterConfigurationType.php

**Path**: `src\Form\ProductVariantFilterConfigurationType.php`

## Summary
This Symfony form type configures a filter for product variants, likely used in Sylius e-commerce promotion rules or product filtering. It provides an autocomplete field for selecting multiple product variants and uses data transformers to convert between product variant objects and their string codes for proper form handling and persistence. The form manages bidirectional transformation between ArrayCollections of product variants and their code representations through both view and model transformers.

## Classes
- `ProductVariantFilterConfigurationType`

## Function Details

### `__construct`

- **Parameters**: `DataTransformerInterface $productVariantsToCodesTransformer`

### `buildForm`

- **Parameters**: `FormBuilderInterface $builder, array $options`

### `configureOptions`

- **Parameters**: `OptionsResolver $resolver`

### `getBlockPrefix`



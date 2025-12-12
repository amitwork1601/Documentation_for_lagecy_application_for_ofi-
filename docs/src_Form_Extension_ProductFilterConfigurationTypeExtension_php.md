# ProductFilterConfigurationTypeExtension.php

**Path**: `src\Form\Extension\ProductFilterConfigurationTypeExtension.php`

## Summary
This Symfony form extension enhances Sylius's product filter configuration for promotions by adding an autocomplete field for product selection. It replaces the default product field with a `ProductAutocompleteChoiceType` and applies custom data transformers to convert between product entities and their codes, enabling efficient product selection in promotion filters through an autocomplete interface.

## Classes
- `ProductFilterConfigurationTypeExtension`

## Function Details

### `__construct`

- **Parameters**: `DataTransformerInterface $productsToCodesTransformer`

### `buildForm`

- **Parameters**: `FormBuilderInterface $builder, array $options`

### `configureOptions`

- **Parameters**: `OptionsResolver $resolver`

### `getExtendedTypes`



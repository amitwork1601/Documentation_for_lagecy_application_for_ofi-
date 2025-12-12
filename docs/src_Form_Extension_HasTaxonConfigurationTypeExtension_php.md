# HasTaxonConfigurationTypeExtension.php

**Path**: `src\Form\Extension\HasTaxonConfigurationTypeExtension.php`

## Summary
This Symfony form extension customizes the `HasTaxonConfigurationType` form used in Sylius promotion rules to handle taxon (category) selection. It replaces the default taxon field with an autocomplete choice type and applies custom data transformers to convert between taxon objects and their codes, enabling promotions to be configured based on product taxonomies.

## Classes
- `HasTaxonConfigurationTypeExtension`

## Function Details

### `__construct`

- **Parameters**: `DataTransformerInterface $taxonsToCodesTransformer`

### `buildForm`

- **Parameters**: `FormBuilderInterface $builder, array $options`

### `configureOptions`

- **Parameters**: `OptionsResolver $resolver`

### `getExtendedTypes`



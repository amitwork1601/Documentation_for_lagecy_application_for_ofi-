# TaxonFilterConfigurationTypeExtension.php

**Path**: `src\Form\Extension\TaxonFilterConfigurationTypeExtension.php`

## Summary
This Symfony form extension enhances the `TaxonFilterConfigurationType` used in Sylius promotions by replacing the default taxon field with an autocomplete choice field and implementing custom data transformers. It converts between taxon objects and their codes, enabling users to filter promotions by selecting multiple taxons through an autocomplete interface while properly handling the data transformation between the form view and the underlying model.

## Classes
- `TaxonFilterConfigurationTypeExtension`

## Function Details

### `__construct`

- **Parameters**: `DataTransformerInterface $taxonsToCodesTransformer`

### `buildForm`

- **Parameters**: `FormBuilderInterface $builder, array $options`

### `configureOptions`

- **Parameters**: `OptionsResolver $resolver`

### `getExtendedTypes`



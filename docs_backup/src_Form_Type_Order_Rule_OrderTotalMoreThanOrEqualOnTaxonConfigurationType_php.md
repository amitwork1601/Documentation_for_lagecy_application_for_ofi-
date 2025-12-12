# OrderTotalMoreThanOrEqualOnTaxonConfigurationType.php

**Path**: `src\Form\Type\Order\Rule\OrderTotalMoreThanOrEqualOnTaxonConfigurationType.php`

## Summary
This Symfony form type configures a promotion/pricing rule that checks if an order's total meets or exceeds a specified monetary amount for products within a specific taxon (category). It provides two input fields: a taxon selector using autocomplete and a money amount field, with the taxon being transformed between its code representation and the actual entity object for persistence.

## Classes
- `OrderTotalMoreThanOrEqualOnTaxonConfigurationType`

## Function Details

### `__construct`

- **Parameters**: `RepositoryInterface $taxonRepository`

### `buildForm`

- **Parameters**: `FormBuilderInterface $builder, array $options`

### `configureOptions`

- **Parameters**: `OptionsResolver $resolver`


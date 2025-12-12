# OrderQuantityLessThanOrEqualOnTaxonConfigurationType.php

**Path**: `src\Form\Type\Order\Rule\OrderQuantityLessThanOrEqualOnTaxonConfigurationType.php`

## Summary
This form type configures a rule that checks if the quantity of products from a specific taxon (product category) in an order is less than or equal to a specified maximum value. It provides two fields: a taxon selector with autocomplete functionality and a maximum quantity integer input, with a data transformer that converts the taxon selection between its entity object and its code identifier for persistence.

## Classes
- `OrderQuantityLessThanOrEqualOnTaxonConfigurationType`

## Function Details

### `__construct`

- **Parameters**: `RepositoryInterface $taxonRepository`

### `buildForm`

- **Parameters**: `FormBuilderInterface $builder, array $options`


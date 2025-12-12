# ItemTotalMaxConfigurationType.php

**Path**: `src\Form\Type\Promotion\Rule\ItemTotalMaxConfigurationType.php`

## Summary
This Symfony form type configures the rule for a promotion that applies when a cart's item total is below a maximum threshold amount. It creates a single "amount" field using Sylius's MoneyType to set the maximum cart value for the promotion rule, with validation to ensure the amount is not blank and is numeric, and requires a currency parameter to be specified when the form is used.

## Classes
- `ItemTotalMaxConfigurationType`

## Function Details

### `buildForm`

- **Parameters**: `FormBuilderInterface $builder, array $options`

### `configureOptions`

- **Parameters**: `OptionsResolver $resolver`

### `getBlockPrefix`



# LimitFirstOrderConfigurationType.php

**Path**: `src\Form\Type\Promotion\Rule\LimitFirstOrderConfigurationType.php`

## Summary
This Symfony form type configures a promotion rule that limits a discount or offer to first-time orders. It specifically defines a form field called 'choices' that allows selection of product variants (using `ProductVariantCollectionType`) which are required and must not be null, indicating which products are eligible for the first-order promotion restriction.

## Classes
- `LimitFirstOrderConfigurationType`

## Function Details

### `buildForm`

- **Parameters**: `FormBuilderInterface $builder, array $options`


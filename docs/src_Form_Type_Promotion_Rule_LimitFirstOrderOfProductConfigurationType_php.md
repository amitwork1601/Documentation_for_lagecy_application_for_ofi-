# LimitFirstOrderOfProductConfigurationType.php

**Path**: `src\Form\Type\Promotion\Rule\LimitFirstOrderOfProductConfigurationType.php`

## Summary
This Symfony form type configures a promotion rule that limits promotional offers to customers' first orders of specific products. It provides a form interface for administrators to select which products should be subject to the "first order only" restriction, using a required product collection field with validation to ensure at least one product is specified.

## Classes
- `LimitFirstOrderOfProductConfigurationType`

## Function Details

### `buildForm`

- **Parameters**: `FormBuilderInterface $builder, array $options`


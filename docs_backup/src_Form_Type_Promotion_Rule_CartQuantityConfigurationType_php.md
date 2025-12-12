# CartQuantityConfigurationType.php

**Path**: `src\Form\Type\Promotion\Rule\CartQuantityConfigurationType.php`

## Summary
This Symfony form type configures cart quantity rules for promotions, allowing administrators to set minimum or maximum quantity thresholds for cart items. It provides two fields: a dropdown to choose between "at least" (au minimum) or "at most" (au maximum) quantity conditions, and an integer field to specify the actual quantity count, with the form using a callback transformer to convert the min/max choice into boolean values (1 or 0) for processing.

## Classes
- `CartQuantityConfigurationType`

## Function Details

### `buildForm`

- **Parameters**: `FormBuilderInterface $builder, array $options`


# OrderRuleConditionType.php

**Path**: `src\Form\Type\Order\OrderRuleConditionType.php`

## Summary
This form type manages the dynamic configuration of order rule conditions in an e-commerce system. It allows users to select a condition type and dynamically loads the appropriate configuration fields based on the selected type using a form type registry, implementing a flexible rule-based system for order processing logic.

## Classes
- `OrderRuleConditionType`

## Function Details

### `__construct`

- **Parameters**: `string $dataClass, array $validationGroups, FormTypeRegistryInterface $formTypeRegistry`

### `buildForm`

- **Parameters**: `FormBuilderInterface $builder, array $options`

### `getRegistryIdentifier`

- **Parameters**: `FormInterface $form, $data = null`

### `addConfigurationFields`

- **Parameters**: `FormInterface $form, string $configurationType`

### `configureOptions`

- **Parameters**: `OptionsResolver $resolver`

### `getBlockPrefix`



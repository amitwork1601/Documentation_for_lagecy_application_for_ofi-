# OrderRuleConditionCollectionType.php

**Path**: `src\Form\Type\Order\OrderRuleConditionCollectionType.php`

## Summary
This Symfony form type manages a collection of order rule conditions, allowing dynamic addition and deletion of multiple condition entries. It uses a service registry to generate form prototypes for each registered condition type, enabling the UI to dynamically render different condition form configurations based on the available condition types in the system. This is part of a promotion/discount rule system where orders need to match specific conditions before rules can be applied.

## Classes
- `OrderRuleConditionCollectionType`

## Function Details

### `__construct`

- **Parameters**: `ServiceRegistryInterface $registry`

### `buildForm`

- **Parameters**: `FormBuilderInterface $builder, array $options`

### `buildView`

- **Parameters**: `FormView $view, FormInterface $form, array $options`

### `configureOptions`

- **Parameters**: `OptionsResolver $resolver`

### `getParent`


### `getBlockPrefix`



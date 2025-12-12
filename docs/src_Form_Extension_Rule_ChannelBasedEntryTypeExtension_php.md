# ChannelBasedEntryTypeExtension.php

**Path**: `src\Form\Extension\Rule\ChannelBasedEntryTypeExtension.php`

## Summary
This Symfony form extension customizes channel-based promotion rules and actions in a Sylius e-commerce application. It extends various promotion form types (discounts, item totals, taxon-based rules) to add channel-specific configuration capabilities, allowing promotions to have different discount amounts, percentages, or thresholds per sales channel.

## Classes
- `ChannelBasedEntryTypeExtension`

## Function Details

### `getExtendedTypes`


### `getSupportedInnerTypes`


### `configureOptions`

- **Parameters**: `OptionsResolver $resolver`

### `buildForm`

- **Parameters**: `FormBuilderInterface $builder, array $options`

### `setConstraintByActiveChannel`

- **Parameters**: `FormEvent $event, string $type`

### `enableConstraint`

- **Parameters**: `FormInterface $form, string $name, string $type, array $config`

### `disableConstraint`

- **Parameters**: `FormInterface $form, string $name, string $type, array $config`

### `getParentForm`

- **Parameters**: `FormInterface $form`

### `getPropertiesByFormType`

- **Parameters**: `string $formType`


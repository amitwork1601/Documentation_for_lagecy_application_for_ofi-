# FixedDiscountConfigurationTypeExtension.php

**Path**: `src\Form\Extension\FixedDiscountConfigurationTypeExtension.php`

## Summary
This Symfony form extension adds a "partially_usage" checkbox field to Sylius's fixed discount promotion configuration form. It allows administrators to configure whether a fixed discount promotion can be partially applied (likely when the discount amount exceeds the order total), extending the default promotion action configuration with this additional business rule option.

## Classes
- `FixedDiscountConfigurationTypeExtension`

## Function Details

### `buildForm`

- **Parameters**: `FormBuilderInterface $builder, array $options`

### `getExtendedTypes`



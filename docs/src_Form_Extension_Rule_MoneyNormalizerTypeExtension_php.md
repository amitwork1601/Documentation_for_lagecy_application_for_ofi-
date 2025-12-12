# MoneyNormalizerTypeExtension.php

**Path**: `src\Form\Extension\Rule\MoneyNormalizerTypeExtension.php`

## Summary
This Symfony form type extension modifies the behavior of Sylius's `MoneyType` form field by setting a default divisor value of 1. It exists to normalize money input values in forms, ensuring that monetary amounts are handled consistently without automatic division by default (overriding Sylius's typical behavior of dividing by 100 for cent-to-currency conversion).

## Classes
- `MoneyNormalizerTypeExtension`

## Function Details

### `getExtendedTypes`


### `configureOptions`

- **Parameters**: `OptionsResolver $resolver`


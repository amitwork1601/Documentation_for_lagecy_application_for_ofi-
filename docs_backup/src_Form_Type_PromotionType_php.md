# PromotionType.php

**Path**: `src\Form\Type\PromotionType.php`

## Summary
This Symfony form type defines a promotion selection form for orders in a Sylius e-commerce application. It extends the Sylius resource form infrastructure to provide an autocomplete field that allows users to search and select promotions by name while submitting them by their code. The form is specifically designed to add promotions to orders, with the field being unmapped (handled separately from the entity) and using Sylius's promotion resource for data population.

## Classes
- `PromotionType`

## Function Details

### `__construct`

- **Parameters**: `string $dataClass = Order::class, array $validationGroups = ['sylius']`

### `buildForm`

- **Parameters**: `FormBuilderInterface $builder, array $options`

### `getBlockPrefix`



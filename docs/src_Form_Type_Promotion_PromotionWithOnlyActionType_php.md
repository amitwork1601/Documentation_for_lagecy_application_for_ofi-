# PromotionWithOnlyActionType.php

**Path**: `src\Form\Type\Promotion\PromotionWithOnlyActionType.php`

## Summary
This Symfony form type class defines a simplified promotion form that focuses primarily on promotion actions rather than complete promotion configuration. It builds a form for creating/editing promotions with fields for name, usage limit (hardcoded to '1'), and a collection of promotion actions, using the Sylius e-commerce framework's promotion system as its foundation.

## Classes
- `PromotionWithOnlyActionType`

## Function Details

### `__construct`

- **Parameters**: `RepositoryInterface $channelRepository, string $dataClass = Promotion::class, array $validationGroups = ['sylius']`

### `buildForm`

- **Parameters**: `FormBuilderInterface $builder, array $options`

### `configureOptions`

- **Parameters**: `OptionsResolver $resolver`

### `getBlockPrefix`



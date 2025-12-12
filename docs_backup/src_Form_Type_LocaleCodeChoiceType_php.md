# LocaleCodeChoiceType.php

**Path**: `src\Form\Type\LocaleCodeChoiceType.php`

## Summary
This Symfony form type extends `LocaleChoiceType` to handle locale selection by transforming between locale entity objects and their locale code identifiers (like 'en_US', 'fr_FR'). It uses a reversed resource-to-identifier transformer to convert locale entities to/from their code values, enabling forms to work with locale codes as strings rather than full locale entity objects.

## Classes
- `LocaleCodeChoiceType`

## Function Details

### `__construct`

- **Parameters**: `RepositoryInterface $localeRepository`

### `buildForm`

- **Parameters**: `FormBuilderInterface $builder, array $options`

### `getParent`


### `getBlockPrefix`



# ProductVariantCollectionType.php

**Path**: `src\Form\Type\ProductVariantCollectionType.php`

## Summary
This is a Symfony form type that provides an autocomplete/search interface for selecting Sylius product variants. It extends the ResourceAutocompleteChoiceType to enable searching product variants by name using a "contains" search criteria, while storing the variant's code as the selected value. The form type is designed to simplify product variant selection in forms where users need to find and choose from potentially large collections of product variants.

## Classes
- `ProductVariantCollectionType`

## Function Details

### `configureOptions`

- **Parameters**: `OptionsResolver $resolver`

### `buildView`

- **Parameters**: `FormView $view, FormInterface $form, array $options`

### `getParent`


### `getBlockPrefix`



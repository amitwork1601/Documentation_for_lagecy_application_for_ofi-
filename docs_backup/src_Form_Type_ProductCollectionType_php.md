# ProductCollectionType.php

**Path**: `src\Form\Type\ProductCollectionType.php`

## Summary
This Symfony form type defines an autocomplete product selection field for a Sylius e-commerce application. It configures a product collection input that searches products by name using a "contains" search criteria and identifies products by their code, enabling users to easily find and select products through an autocomplete interface. The form extends Sylius's `ResourceAutocompleteChoiceType` to provide AJAX-powered product lookup functionality with phrase-based filtering.

## Classes
- `ProductCollectionType`

## Function Details

### `configureOptions`

- **Parameters**: `OptionsResolver $resolver`

### `buildView`

- **Parameters**: `FormView $view, FormInterface $form, array $options`

### `getParent`


### `getBlockPrefix`



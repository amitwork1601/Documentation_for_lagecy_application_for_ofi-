# SchemaSerializer.php

**Path**: `src\Form\SchemaSerializer.php`

## Summary
The `SchemaSerializer` class converts Symfony Form objects into serialized array representations (schemas) for frontend consumption. It traverses form structures and transforms different form field types (like ProductVariantCollection, ProductCollection, Choice) into standardized array configurations containing metadata such as field type, label, name, ID, and various field-specific properties. This enables dynamic form rendering in client applications by providing a JSON-compatible schema of form structures with translated labels and proper field configurations.

## Classes
- `SchemaSerializer`

## Function Details

### `__construct`

- **Parameters**: `private TranslatorInterface $translator`

### `serialize`

- **Parameters**: `Form $node, ?string $dependsOn = null`

### `getTypeName`

- **Parameters**: `FormTypeInterface $innerType`

### `humanize`

- **Parameters**: `string $text`

### `buildChildFields`

- **Parameters**: `FormView $formView, string $typeName`


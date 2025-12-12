# SmartFieldChoicesDefinition.ts

**Path**: `packages\smartForm\src\definitions\SmartFieldChoicesDefinition.ts`

## Summary
This class defines a choice-based form field (select, checkbox, or radio) for a smart form system, extending the base `SmartFieldDefinition`. It determines the appropriate field type based on configuration options (multiple selection and expanded display), automatically mapping to checkboxes for multiple expanded choices, radio buttons for single expanded choices, or select dropdowns otherwise. The class encapsulates field behavior including choice options, labels, validation requirements, and custom value comparison logic for form field rendering.

## Classes
- `SmartFieldChoicesDefinition`

## Interfaces
- `ISmartFieldChoicesOption`
- `ISmartFieldChoicesChoiceOption`

## Type Aliases
- `TSmartFieldChoicesFieldType`


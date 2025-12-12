# SmartFormDefinition.ts

**Path**: `packages\smartForm\src\definitions\SmartFormDefinition.ts`

## Summary
This file defines the core structure for a smart form system that integrates Vue 3 reactivity with Zod schema validation. The `SmartFormDefinition` abstract class manages form state, field definitions, validation errors, and submission handling, while the `FormError` class provides a structured way to handle both global form errors and field-specific validation errors. It serves as the foundational layer for building type-safe, validated forms with async submission capabilities.

## Classes
- `FormError`
- `SmartFormDefinition`

## Type Aliases
- `TFields`

## Function Details

### `isRequiredFieldsCompleted`

- **Parameters**: `this.Fields.filter((field`

### `isOptionalFieldsCompleted`

- **Parameters**: `optionalFields?.every((fields`


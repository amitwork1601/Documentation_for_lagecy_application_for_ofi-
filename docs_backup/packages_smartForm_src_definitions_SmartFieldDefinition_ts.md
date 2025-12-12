# SmartFieldDefinition.ts

**Path**: `packages\smartForm\src\definitions\SmartFieldDefinition.ts`

## Summary
This abstract base class defines the structure for form field definitions in a Vue-based smart form system. It manages field metadata (name, label), reactive error state, and provides bidirectional data binding through VModel getters/setters that communicate with a parent SmartFormDefinition. The class serves as a foundation for specific field types to extend, requiring them to implement a Component property while handling common field concerns like validation errors, naming, and form hierarchy relationships.

## Classes
- `SmartFieldDefinition`


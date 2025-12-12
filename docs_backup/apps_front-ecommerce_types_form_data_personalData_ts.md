# personalData.ts

**Path**: `apps\front-ecommerce\types\form\data\personalData.ts`

## Summary
This TypeScript file defines Zod validation schemas for user personal data in an e-commerce application. The `PersonalDataSchema` validates customer information including gender, name, email, birthday (with custom validation to prevent future dates and ages over 120 years), and newsletter subscription preferences, while `personalPreferencesSchema` handles locale/language settings. These schemas are used for form validation and type safety when collecting and processing customer profile information.

## Type Aliases
- `TPersonalData`
- `TPersonalPreferencesSchema`


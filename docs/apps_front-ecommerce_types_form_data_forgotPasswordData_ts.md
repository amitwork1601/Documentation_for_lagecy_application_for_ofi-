# forgotPasswordData.ts

**Path**: `apps\front-ecommerce\types\form\data\forgotPasswordData.ts`

## Summary
This file defines a Zod validation schema for a password reset form in an e-commerce application. It validates that both password fields contain between 5-255 characters and ensures the "new password" and "confirm password" fields match, raising a custom validation error on the confirmation field if they differ. The schema is exported along with its TypeScript type inference for use in password recovery workflows.

## Type Aliases
- `TForgotPasswordData`


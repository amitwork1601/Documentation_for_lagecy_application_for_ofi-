# loginRequest.ts

**Path**: `apps\front-ecommerce\types\form\data\loginRequest.ts`

## Summary
This file defines the validation schema and TypeScript types for login request data in an e-commerce application. It uses Zod to validate traditional email/password login credentials (including reCAPTCHA verification) and also supports an alternative Google OAuth token-based authentication method through a union type. The schema enforces business rules like email format validation, password length constraints (5-255 characters), and required reCAPTCHA for standard logins.

## Type Aliases
- `TLoginRequest`


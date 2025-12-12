# registerRequest.ts

**Path**: `apps\front-ecommerce\types\form\data\registerRequest.ts`

## Summary
This file defines a Zod validation schema for user registration requests in an e-commerce application. It validates registration form data including required fields (name, email, password), optional fields (gender, birthday, newsletter subscription), and includes custom validation logic to ensure birthdays are not in the future and users are not older than 120 years. The schema also enforces reCAPTCHA verification as part of the registration security process.

## Type Aliases
- `TRegisterRequest`


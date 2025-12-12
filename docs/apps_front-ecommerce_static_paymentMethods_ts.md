# paymentMethods.ts

**Path**: `apps\front-ecommerce\static\paymentMethods.ts`

## Summary
This file defines a constant object that serves as a centralized registry of payment method identifiers used throughout the e-commerce application. It provides type-safe string constants for various payment providers (PayZen, Checkout.com) and payment types (cheque, bank transfer, free, manual) to ensure consistent referencing across the codebase. The `as const` assertion makes these keys readonly and enables TypeScript to infer literal types for better type safety when handling payment method logic.


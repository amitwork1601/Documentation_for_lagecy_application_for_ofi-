# addressForm.ts

**Path**: `apps\front-ecommerce\types\form\addressForm.ts`

## Summary
The `AddressForm` class extends `SmartFormDefinition` to programmatically construct a validated address entry form for an e-commerce application. It defines field definitions for standard address components (name, company, country, phone numbers, street address, postal code, city, and alias) using various SmartForm field types, with country-specific phone validation and optional comment functionality. The form integrates with Zod schema validation (`AddressSchema`) and handles form submission through a callback that processes the validated address data.

## Classes
- `AddressForm`


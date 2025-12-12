# address.ts

**Path**: `apps\front-ecommerce\types\form\data\address.ts`

## Summary
This file defines a Zod validation schema for e-commerce address forms, enforcing data quality rules for customer shipping/billing addresses. The schema validates standard address fields (name, street, city, postal code, phone) with specific constraints like character limits, special character restrictions, and phone number validation using libphonenumber-js. It includes async refinement logic to verify phone numbers are valid for the specified country code, ensuring addresses meet both format and business requirements before submission.

## Type Aliases
- `TAddress`

## Function Details

### `parsePhone`

- **Parameters**: `phoneNumber: string`


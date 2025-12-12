# trackingEventOnSignUp.ts

**Path**: `apps\front-ecommerce\types\tracking\trackingEventOnSignUp.ts`

## Summary
This class implements a tracking event specifically for user sign-up actions in an e-commerce application. It extends a base `TrackingEvent` class to capture sign-up attempts, recording the user's email, success status (OK/KO based on login state), and user type (New Client/Guest), then formats this data for Google Tag Manager (GTM) integration. The event differentiates between successful sign-ups (logged-in users) and failed attempts (guests) to enable analytics on user registration conversion rates.

## Classes
- `TrackingEventOnSignUp`


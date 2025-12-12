# trackingEventOnSendEmail.ts

**Path**: `apps\front-ecommerce\types\tracking\trackingEventOnSendEmail.ts`

## Summary
This class defines a tracking event for monitoring email send operations in an e-commerce application. It extends the base `TrackingEvent` class to capture email sending outcomes by recording the email name and success status, then formats this data for Google Tag Manager with standardized event properties (event_name, event_action, event_label) where the label indicates whether the email was sent successfully ("OK") or failed ("KO").

## Classes
- `TrackingEventOnSendEmail`


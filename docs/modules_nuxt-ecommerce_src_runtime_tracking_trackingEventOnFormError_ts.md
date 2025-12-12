# trackingEventOnFormError.ts

**Path**: `modules\nuxt-ecommerce\src\runtime\tracking\trackingEventOnFormError.ts`

## Summary
This class implements a specialized tracking event for capturing form validation errors in an e-commerce application. It extends the base `TrackingEvent` class to create GTM (Google Tag Manager) custom events specifically for form errors, capturing which form fields failed validation (`label`) and where the error occurred (`location`). The `toData()` method formats the error information into a standardized event structure with event name "form_error" and action "Click" for analytics tracking purposes.

## Classes
- `TrackingEventOnFormError`


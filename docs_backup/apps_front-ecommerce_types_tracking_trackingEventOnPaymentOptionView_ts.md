# trackingEventOnPaymentOptionView.ts

**Path**: `apps\front-ecommerce\types\tracking\trackingEventOnPaymentOptionView.ts`

## Summary
This code defines a tracking event class for e-commerce checkout analytics, specifically for when payment options are displayed to users. It extends a base `TrackingEvent` class with the event type 'payment_option_view' and overrides the data transformation method to rename it to a 'checkout' event when sent to analytics systems, enabling monitoring of user progression through the payment selection step of the checkout flow.

## Classes
- `TrackingEventOnPaymentOptionView`


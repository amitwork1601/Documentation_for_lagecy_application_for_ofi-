# trackingEventOnCheckoutProgress.ts

**Path**: `apps\front-ecommerce\types\tracking\trackingEventOnCheckoutProgress.ts`

## Summary
This class tracks checkout progress events in an e-commerce application by mapping user navigation through checkout steps (account, delivery, shipping, payment) to corresponding numeric step indices for analytics purposes. It extends a base `TrackingEvent` class and converts checkout state into standardized tracking data, determining the current checkout step based on the `stepOpened` property and whether the user is on the address or shipping substep within the delivery flow.

## Classes
- `TrackingEventOnCheckoutProgress`

## Function Details

### `getCurrentStep`



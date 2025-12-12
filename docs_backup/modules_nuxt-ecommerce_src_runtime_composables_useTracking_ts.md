# useTracking.ts

**Path**: `modules\nuxt-ecommerce\src\runtime\composables\useTracking.ts`

## Summary
This composable provides a tracking mechanism for e-commerce events in a Nuxt application by dispatching TrackingEvent objects through Nuxt's custom hook system. It accepts an optional event, validates its presence, and triggers the 'app:tracking' hook with the event data and an optional array of tracker identifiers, enabling multiple analytics/tracking services to respond to e-commerce activities like purchases, cart updates, or page views.


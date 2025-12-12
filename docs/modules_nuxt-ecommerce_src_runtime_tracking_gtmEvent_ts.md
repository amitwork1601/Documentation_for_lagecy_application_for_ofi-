# gtmEvent.ts

**Path**: `modules\nuxt-ecommerce\src\runtime\tracking\gtmEvent.ts`

## Summary
The `GTMEvent` class is a wrapper for Google Tag Manager (GTM) tracking events in an e-commerce application, responsible for formatting and sending analytics data with contextual metadata (environment, country, store code) to GTM. It transforms generic tracking event payloads into GTM-compatible data structures by adding platform-specific fields, appending "_gtm" suffix to event names, and clearing previous ecommerce data before sending new events. This class serves as the integration layer between the application's tracking system and GTM's data layer for e-commerce analytics.

## Classes
- `GTMEvent`


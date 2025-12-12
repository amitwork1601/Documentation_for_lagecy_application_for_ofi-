# trackingEventOnPageView.ts

**Path**: `apps\front-ecommerce\types\tracking\trackingEventOnPageView.ts`

## Summary
This class extends the base `TrackingEvent` to specifically handle page view tracking events in an e-commerce application. It captures hierarchical page categorization (category1-3), page template information, and product page types, then enriches the tracking data with site version and user information from GTM (Google Tag Manager) when converting to a tracking payload. The class serves as a structured way to collect and format page view analytics data for e-commerce pages with proper categorization and user context.

## Classes
- `TrackingEventOnPageView`


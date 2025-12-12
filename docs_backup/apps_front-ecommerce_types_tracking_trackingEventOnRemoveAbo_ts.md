# trackingEventOnRemoveAbo.ts

**Path**: `apps\front-ecommerce\types\tracking\trackingEventOnRemoveAbo.ts`

## Summary
This class implements a tracking event specifically for subscription removal ("remove_abo") in an e-commerce system. It extends a base `TrackingEvent` class to transform Sylius product data into GTM (Google Tag Manager) format, mapping product properties like variant code, pricing, and quantities into standardized e-commerce tracking items. The event is used to track when users remove subscription items from their cart or account, providing analytics data about which subscribed products are being cancelled.

## Classes
- `TrackingEventOnRemoveAbo`


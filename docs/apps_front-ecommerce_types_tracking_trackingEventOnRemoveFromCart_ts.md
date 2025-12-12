# trackingEventOnRemoveFromCart.ts

**Path**: `apps\front-ecommerce\types\tracking\trackingEventOnRemoveFromCart.ts`

## Summary
This class handles tracking analytics events when products are removed from a shopping cart in an e-commerce application. It extends a base `TrackingEvent` class and transforms cart item data (including product details, quantities, variants, and pricing) into a standardized GTM (Google Tag Manager) format for analytics reporting. The class maps Sylius product data to tracking output format with enriched metadata like item categories, ratings, and subscription information for accurate cart removal event monitoring.

## Classes
- `TrackingEventOnRemoveFromCart`


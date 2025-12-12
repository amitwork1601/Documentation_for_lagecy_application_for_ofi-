# pixieEvent.ts

**Path**: `modules\nuxt-ecommerce\src\runtime\tracking\pixieEvent.ts`

## Summary
The `PixieEvent` class is a tracking event wrapper that transforms e-commerce tracking events into a standardized "Pixie" format for analytics and GTM (Google Tag Manager) integration. It captures environment context (GTM environment, country, store code), extracts UTM parameters and page metadata from the current URL, and prepares tracking data payloads for transmission to analytics platforms. This serves as an adapter layer between the application's tracking events and the external tracking system used by the e-commerce platform.

## Classes
- `PixieEvent`


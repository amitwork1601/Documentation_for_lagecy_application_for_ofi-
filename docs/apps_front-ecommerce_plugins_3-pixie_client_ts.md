# 3-pixie.client.ts

**Path**: `apps\front-ecommerce\plugins\3-pixie.client.ts`

## Summary
This Nuxt plugin initializes Pixie tracking (a custom analytics/tracking system) on the client side by hooking into the application's tracking events. When enabled via configuration, it intercepts tracking events through a custom hook and converts them into PixieEvent instances that are sent to the Pixie tracking service, using localized store codes and environment-specific configuration for e-commerce analytics.


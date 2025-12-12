# guideEntranceFeatureGuard.ts

**Path**: `apps\front-ecommerce\middleware\guideEntranceFeatureGuard.ts`

## Summary
This Nuxt.js route middleware acts as a feature flag guard for the user guide entrance functionality in an e-commerce application. It checks if the `userGuide` feature is enabled in the runtime configuration and blocks navigation with a 404 error if the feature is disabled, ensuring users cannot access guide-related routes when the feature is turned off.


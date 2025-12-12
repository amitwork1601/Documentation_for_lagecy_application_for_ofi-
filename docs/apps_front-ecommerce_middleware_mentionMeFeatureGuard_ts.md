# mentionMeFeatureGuard.ts

**Path**: `apps\front-ecommerce\middleware\mentionMeFeatureGuard.ts`

## Summary
This Nuxt.js route middleware guards access to MentionMe referral program features by checking if the feature is enabled in the runtime configuration. If the MentionMe feature flag is disabled, it prevents navigation and returns a 404 error, effectively hiding referral-related pages from users when the feature is turned off. This middleware only executes on the client-side to control access to MentionMe integration routes in the e-commerce application.


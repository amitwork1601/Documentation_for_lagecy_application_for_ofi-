# guideBiNutritionEntranceFeatureGuard.ts

**Path**: `apps\front-ecommerce\middleware\guideBiNutritionEntranceFeatureGuard.ts`

## Summary
This Nuxt route middleware guards access to a BI (Brand Intelligence) nutrition feature entrance by validating both feature flag availability and required query parameters. It checks that the 'bi-nutrition' feature is enabled and that both 'variant' and 'quantity' query parameters are present in the URL, otherwise aborting navigation with a 404 error. The middleware only executes on the client-side and ensures users cannot access the nutrition guide feature without proper configuration and URL parameters.


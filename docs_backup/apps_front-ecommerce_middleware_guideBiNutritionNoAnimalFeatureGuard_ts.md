# guideBiNutritionNoAnimalFeatureGuard.ts

**Path**: `apps\front-ecommerce\middleware\guideBiNutritionNoAnimalFeatureGuard.ts`

## Summary
This Nuxt middleware guards the nutrition guide feature by ensuring users are authenticated and have at least one animal registered before accessing nutrition-related routes. If either condition fails, it aborts navigation and redirects users to the animal selection page for the nutrition guide, preserving query parameters from the original request. The middleware specifically prevents access to nutrition guide features when no animals are associated with the customer's account.


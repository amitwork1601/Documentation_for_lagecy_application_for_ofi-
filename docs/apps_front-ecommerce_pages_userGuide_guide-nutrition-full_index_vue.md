# index.vue

**Path**: `apps\front-ecommerce\pages\userGuide\guide-nutrition-full\index.vue`

## Summary
This Vue 3 page component serves as the entry point for a full nutrition guide specifically for cat owners in an e-commerce application. It validates that the user has registered cats in their account, and if none exist, automatically redirects them to an animal registration page to collect this required information before proceeding with the nutrition guide. The page implements feature guards via middleware, tracks user visits for analytics, and sets up the page context with appropriate messaging for already-signed-up users.

## Function Details

### `trackingOnPageView`


### `animals`

- **Parameters**: `await getAnimals().then((animals`


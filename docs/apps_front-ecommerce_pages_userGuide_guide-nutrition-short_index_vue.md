# index.vue

**Path**: `apps\front-ecommerce\pages\userGuide\guide-nutrition-short\index.vue`

## Summary
This Vue page component serves as the entry point for a short nutrition guide specifically for cat owners in an e-commerce application. It checks if the user has registered cats and, if none exist, automatically redirects them to an animal registration page; otherwise, it displays the nutrition guide interface with tracking analytics. The page implements feature guards via middleware to control access and uses a custom "user-guide" layout that enables a results page view.

## Function Details

### `trackingOnPageView`


### `animals`

- **Parameters**: `await getAnimals().then((animals`


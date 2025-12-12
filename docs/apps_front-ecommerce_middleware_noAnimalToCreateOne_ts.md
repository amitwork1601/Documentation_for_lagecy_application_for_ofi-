# noAnimalToCreateOne.ts

**Path**: `apps\front-ecommerce\middleware\noAnimalToCreateOne.ts`

## Summary
This Nuxt route middleware ensures users have at least one animal associated with their account before accessing certain pages. If the user is not logged in or has no animals, it aborts navigation and redirects them to the animal creation guide (unless they're already on an animal guide page), preserving query parameters and preventing access to features that require an existing animal profile.


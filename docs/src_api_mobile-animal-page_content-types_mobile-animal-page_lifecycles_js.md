# lifecycles.js

**Path**: `src\api\mobile-animal-page\content-types\mobile-animal-page\lifecycles.js`

## Summary
This file implements Strapi lifecycle hooks for the mobile-animal-page content type that automatically synchronizes published animal page data to Firestore. When an animal page is created or updated (and is in published state), it formats the mobile images, removes audit fields (createdBy/updatedBy), and saves the document to a country and locale-specific Firestore collection named "AnimalPage".


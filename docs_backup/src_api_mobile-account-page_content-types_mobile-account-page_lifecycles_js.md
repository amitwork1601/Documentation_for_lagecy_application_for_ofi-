# lifecycles.js

**Path**: `src\api\mobile-account-page\content-types\mobile-account-page\lifecycles.js`

## Summary
This file defines Strapi lifecycle hooks for the mobile account page content type that automatically syncs published content to Firestore. When an account page is created or updated (and is in published state), it processes mobile images, formats the data, and saves it to a locale-specific Firestore collection while removing internal metadata fields like `createdBy` and `updatedBy`.


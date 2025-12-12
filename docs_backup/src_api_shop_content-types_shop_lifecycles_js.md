# lifecycles.js

**Path**: `src\api\shop\content-types\shop\lifecycles.js`

## Summary
This file implements Strapi lifecycle hooks for the "shop" content type that automatically synchronize shop data to Firestore after create and update operations. When a shop entry is created or modified, it fetches the complete shop data with deep population (including nested content and images), formats mobile images, and saves/updates the corresponding document in a locale-specific Firestore collection using the shop's slug as the document ID.


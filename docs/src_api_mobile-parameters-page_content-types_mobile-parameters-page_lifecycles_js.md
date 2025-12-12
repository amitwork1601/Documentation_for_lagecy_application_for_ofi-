# lifecycles.js

**Path**: `src\api\mobile-parameters-page\content-types\mobile-parameters-page\lifecycles.js`

## Summary
This code implements Strapi CMS lifecycle hooks for a mobile parameters page content type that automatically synchronizes published content to Firestore. When a parameters page is created or updated (and is published), it formats mobile images, removes audit fields (createdBy/updatedBy), and saves the data to a country and locale-specific Firestore collection for mobile app consumption.


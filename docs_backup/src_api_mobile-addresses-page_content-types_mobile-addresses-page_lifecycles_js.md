# lifecycles.js

**Path**: `src\api\mobile-addresses-page\content-types\mobile-addresses-page\lifecycles.js`

## Summary
This code implements Strapi CMS lifecycle hooks for the mobile addresses page content type that automatically syncs published content to Firestore. When an addresses page is created or updated and has a published status, it formats mobile images, removes audit fields (createdBy/updatedBy), and saves the content to a country and locale-specific Firestore collection for mobile app consumption.


# lifecycles.js

**Path**: `src\api\mobile-shop-page\content-types\mobile-shop-page\lifecycles.js`

## Summary
This lifecycle hook module automatically synchronizes published mobile shop page content to Firestore after creation or updates. When a shop page is published, it formats mobile images, removes audit fields (createdBy/updatedBy), and saves the document to a locale-specific Firestore collection (e.g., `content-US-en`) for mobile app consumption.


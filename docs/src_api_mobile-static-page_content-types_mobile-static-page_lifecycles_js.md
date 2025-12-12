# lifecycles.js

**Path**: `src\api\mobile-static-page\content-types\mobile-static-page\lifecycles.js`

## Summary
This Strapi lifecycle hook automatically syncs published mobile static pages to Firestore after creation or updates. When a page is published, it formats mobile images, constructs a locale-specific collection path (e.g., `pages-{country}-{locale}`), and saves the page document to Firestore using the page's slug as the document ID, excluding internal metadata fields like `createdBy` and `updatedBy`.


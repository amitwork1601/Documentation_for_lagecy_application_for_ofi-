# lifecycles.js

**Path**: `src\api\mobile-about-page\content-types\mobile-about-page\lifecycles.js`

## Summary
This Strapi lifecycle hook manages the synchronization of mobile "About Page" content to Firestore. When an About Page entry is created or updated (and published), it formats the mobile images, removes audit fields (createdBy/updatedBy), and saves the sanitized content to a locale-specific Firestore collection for mobile app consumption.


# lifecycles.js

**Path**: `src\api\mobile-contact-page\content-types\mobile-contact-page\lifecycles.js`

## Summary
This file implements Strapi lifecycle hooks for the mobile contact page content type that automatically synchronizes published contact page data to Firestore. When a contact page is created or updated (and is in published state), it formats mobile images, removes audit fields (createdBy/updatedBy), and saves the document to a locale-specific Firestore collection for mobile app consumption.


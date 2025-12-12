# lifecycles.js

**Path**: `src\api\mobile-sponsorship-page\content-types\mobile-sponsorship-page\lifecycles.js`

## Summary
This file defines Strapi lifecycle hooks for the mobile sponsorship page content type that automatically syncs published sponsorship page data to Firestore. When a sponsorship page is created or updated (and is in published state), it formats the mobile images, removes audit fields (createdBy/updatedBy), and saves the content to a country and locale-specific Firestore collection for mobile app consumption.


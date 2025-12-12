# lifecycles.js

**Path**: `src\api\mobile-order-page\content-types\mobile-order-page\lifecycles.js`

## Summary
This lifecycle hook module synchronizes published mobile order page content from Strapi CMS to Firestore. When a mobile order page is created or updated and marked as published, it formats the images, removes internal metadata (createdBy, updatedBy), and saves the content to a locale-specific Firestore collection using the country and language configuration.


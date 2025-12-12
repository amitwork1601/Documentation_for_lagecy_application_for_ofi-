# lifecycles.js

**Path**: `src\api\mobile-animals-listing\content-types\mobile-animals-listing\lifecycles.js`

## Summary
This Strapi lifecycle hooks file automatically syncs published mobile animals listing content to Firestore after creation or updates. When an animals listing is created or updated with a published status, it formats mobile images, removes audit fields (createdBy/updatedBy), and saves the document to a locale-specific Firestore collection named by country and language configuration.


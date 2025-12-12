# lifecycles.js

**Path**: `src\api\mobile-subscription-page\content-types\mobile-subscription-page\lifecycles.js`

## Summary
This lifecycle hook module automatically syncs mobile subscription page content to Firestore whenever a page is created or updated in Strapi CMS. When a published subscription page entry changes, it retrieves the full entry including FAQ questions and abort reasons, then saves it to a country/locale-specific Firestore collection, removing audit fields (createdBy/updatedBy) before storage.


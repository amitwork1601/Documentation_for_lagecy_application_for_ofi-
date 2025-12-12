# lifecycles.js

**Path**: `src\api\mobile-informations-page\content-types\mobile-informations-page\lifecycles.js`

## Summary
This Strapi lifecycle hooks module synchronizes mobile informations page content to Firestore when pages are created or updated. After create/update events, if the content is published, it formats mobile images, removes audit fields (createdBy/updatedBy), and saves the document to a locale-specific Firestore collection using the pattern `content-{country}-{locale}` with document ID "InfosPage".


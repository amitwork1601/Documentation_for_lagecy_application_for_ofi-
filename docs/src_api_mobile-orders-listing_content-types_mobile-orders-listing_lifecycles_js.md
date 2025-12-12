# lifecycles.js

**Path**: `src\api\mobile-orders-listing\content-types\mobile-orders-listing\lifecycles.js`

## Summary
This lifecycle hook module synchronizes mobile orders listing page content to Firestore whenever it's created or updated in Strapi CMS. When a published orders listing page is created or modified, it formats the mobile images, removes audit fields (createdBy/updatedBy), and saves the document to a locale-specific Firestore collection for mobile app consumption.


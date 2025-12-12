# lifecycles.js

**Path**: `src\api\mobile-notifications-page\content-types\mobile-notifications-page\lifecycles.js`

## Summary
This lifecycle hook module manages the synchronization of a mobile notifications page content with Firestore after create and update operations in Strapi CMS. When the notifications page is published, it formats mobile images, removes audit fields (createdBy/updatedBy), and saves the content to a Firestore collection named by country and locale (e.g., "content-US-en").


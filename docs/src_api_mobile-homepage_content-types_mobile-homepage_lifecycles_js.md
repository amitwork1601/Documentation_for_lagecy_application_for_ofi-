# lifecycles.js

**Path**: `src\api\mobile-homepage\content-types\mobile-homepage\lifecycles.js`

## Summary
This Strapi lifecycle hook synchronizes mobile homepage content to Firestore after creation or updates. When a mobile homepage is published, it formats the content's images using `prepareMobileImages`, then saves the sanitized data (excluding audit fields) to a locale-specific Firestore collection for mobile app consumption.


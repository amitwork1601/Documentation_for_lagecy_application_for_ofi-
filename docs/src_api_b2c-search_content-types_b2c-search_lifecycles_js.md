# lifecycles.js

**Path**: `src\api\b2c-search\content-types\b2c-search\lifecycles.js`

## Summary
This lifecycle hook module for a Strapi B2C search content type triggers localization updates after content creation or modification. Whenever a B2C search entry is created or updated, it automatically invokes the Akeneo import plugin's localizer service to synchronize or update localized content, ensuring product data remains consistent across different languages or regions.


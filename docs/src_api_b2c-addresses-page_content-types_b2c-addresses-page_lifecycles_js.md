# lifecycles.js

**Path**: `src\api\b2c-addresses-page\content-types\b2c-addresses-page\lifecycles.js`

## Summary
This code defines Strapi lifecycle hooks for the B2C addresses page content type that automatically trigger localization after content creation or updates. Specifically, it calls the Akeneo import plugin's localizer service to synchronize or update localized content whenever the B2C addresses page is created or modified, ensuring that address-related content remains properly localized across different language versions.


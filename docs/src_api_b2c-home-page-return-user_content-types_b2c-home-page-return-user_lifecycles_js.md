# lifecycles.js

**Path**: `src\api\b2c-home-page-return-user\content-types\b2c-home-page-return-user\lifecycles.js`

## Summary
This file defines Strapi lifecycle hooks for the "b2c-home-page-return-user" content type that automatically trigger localization operations after content creation or updates. Specifically, it invokes the localizer service from the "import-akeneo" plugin to synchronize or localize content whenever a returning user's home page configuration is created or modified, ensuring content consistency across different locales in the Akeneo PIM integration.


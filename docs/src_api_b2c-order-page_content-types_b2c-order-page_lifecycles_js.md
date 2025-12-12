# lifecycles.js

**Path**: `src\api\b2c-order-page\content-types\b2c-order-page\lifecycles.js`

## Summary
This file defines lifecycle hooks for the B2C order page content type that trigger localization operations after content creation or updates. Specifically, it calls the `localize()` method from the `import-akeneo` plugin's localizer service to ensure that B2C order page content is properly localized/translated whenever the content is created or modified. This appears to be part of an integration between Strapi CMS and Akeneo PIM system for managing multilingual e-commerce content.


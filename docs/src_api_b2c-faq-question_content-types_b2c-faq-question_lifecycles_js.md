# lifecycles.js

**Path**: `src\api\b2c-faq-question\content-types\b2c-faq-question\lifecycles.js`

## Summary
This code implements lifecycle hooks for a B2C FAQ question content type in Strapi, automatically syncing data to Algolia search after content creation or updates. When FAQ questions are created or modified, it prepares and saves the content to an Algolia search index using configuration from `algolia.json`, then triggers a localization service from the Akeneo import plugin to handle multi-language content.


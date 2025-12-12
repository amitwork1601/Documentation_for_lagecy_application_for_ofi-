# lifecycles.js

**Path**: `src\api\b2c-category\content-types\b2c-category\lifecycles.js`

## Summary
This file defines Strapi lifecycle hooks for the B2C category content type that automatically sync category data to Algolia search index and trigger localization after create/update operations. When a B2C category is created or modified, it prepares the model data according to Algolia configuration, saves it to the search index, and then invokes the Akeneo import plugin's localizer service to handle content localization across different languages or regions.


# lifecycles.js

**Path**: `src\api\b2c-product\content-types\b2c-product\lifecycles.js`

## Summary
This lifecycle hook file manages the synchronization of B2C product data across multiple systems (Algolia search index and Firestore database) whenever products are created or updated in Strapi CMS. After each create or update operation, it automatically prepares and saves the product data to Algolia for search functionality, stores it in Firestore using the product SKU as the document ID with locale-specific collections, and triggers localization processing through the Akeneo import plugin.


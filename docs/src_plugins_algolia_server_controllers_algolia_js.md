# algolia.js

**Path**: `src\plugins\algolia\server\controllers\algolia.js`

## Summary
This Strapi plugin controller manages the synchronization of content between Strapi CMS and Algolia search service. It provides two main endpoints: `saveObject` for indexing individual content entries and `saveCollection` for bulk-indexing entire content collections, both of which load content-type-specific Algolia configurations and transform the data before sending it to Algolia's indexing service.


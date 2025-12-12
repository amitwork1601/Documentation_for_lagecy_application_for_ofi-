# index.js

**Path**: `src\plugins\algolia\server\routes\index.js`

## Summary
This file defines the HTTP route configuration for an Algolia search integration plugin in a Strapi application. It exports two POST endpoints: one for saving individual objects to Algolia's search index (`/`) and another for saving entire collections (`/collection`), both handled by the `algoliaController`. These routes enable the synchronization of content from the CMS to Algolia's search service for indexing purposes.


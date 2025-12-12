# lifecycles.js

**Path**: `src\api\blog-article\content-types\blog-article\lifecycles.js`

## Summary
This file implements Strapi lifecycle hooks for the blog-article content type to manage Algolia search index synchronization. It automatically updates the Algolia search index whenever blog articles are created or updated, and includes special logic in `beforeUpdate` to preserve the original `updatedAt` timestamp when system-automated updates (like recommended products/articles changes) occur to prevent unintended modification tracking.

## Function Details

### `isSystemUpdate`

- **Parameters**: `dataKeys.some(key`


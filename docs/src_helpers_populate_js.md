# populate.js

**Path**: `src\helpers\populate.js`

## Summary
This module generates a deep population configuration object for Strapi content queries by recursively traversing a content type's schema. It automatically populates all relations, media fields, components, and dynamic zones while excluding audit fields (createdBy/updatedBy), enabling efficient retrieval of nested data structures without manually specifying each relationship. The function adapts its output format based on whether the query uses the entity service API (populate: "*") or query engine API (populate: true).

## Function Details

### `getDeepPopulate`

- **Parameters**: `strapi, uid, queryApi = false`


# prepareAlgoliaModel.js

**Path**: `src\helpers\prepareAlgoliaModel.js`

## Summary
This code prepares Strapi CMS entities for indexing in Algolia search service by fetching entities with deep population, normalizing their structure, and cleaning the data. It removes sensitive fields (like `createdBy`, `updatedBy`), truncates long strings to a configurable length (default 300 chars), handles media objects by selecting only relevant fields, and adds Algolia-specific metadata like `objectID` and `_tags` (published/unpublished, available/unavailable status). The module supports custom transformation logic through optional `prepareAlgoliaModel` service methods on individual content types.

## Function Details

### `normalizeEntity`

- **Parameters**: `uid, entity, config`

### `cleanObject`

- **Parameters**: `algoliaModel, config`

### `prepareAlgoliaModel`

- **Parameters**: `strapi, uid, id, config`

### `prepareAlgoliaCollection`

- **Parameters**: `strapi, uid, config`


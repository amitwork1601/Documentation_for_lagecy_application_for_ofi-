# contentPopulate.js

**Path**: `src\helpers\contentPopulate.js`

## Summary
This helper function generates a complex nested population configuration for Strapi CMS content queries. It recursively populates related entities (categories, images, slides, shops, overlays, etc.) to ensure all nested relationships and media are fetched in a single query, avoiding the N+1 problem common in relational data fetching. The function specifically handles overlay population across multiple content types and maintains any existing population settings while adding standardized nested relationships.

## Function Details

### `getOverlayPopulate`

- **Parameters**: `deepOverlay, queryApi`

### `getContentPopulate`

- **Parameters**: `deep, queryApi, contentKey = "content"`


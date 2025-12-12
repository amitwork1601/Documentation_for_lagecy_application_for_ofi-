# excludedContentTypes.js

**Path**: `src\plugins\json-preview-export\admin\src\config\excludedContentTypes.js`

## Summary
This configuration file defines content types to exclude from the JSON Preview &amp; Export plugin in a Strapi CMS, specifically targeting B2C homepage and landing page types that contain dynamic zones. The exclusion prevents performance issues by blocking JSON preview functionality for content types with large datasets, with a utility function provided to check if a given content type UID should be excluded from the plugin.

## Function Details

### `isContentTypeExcluded`

- **Parameters**: `contentTypeUid`


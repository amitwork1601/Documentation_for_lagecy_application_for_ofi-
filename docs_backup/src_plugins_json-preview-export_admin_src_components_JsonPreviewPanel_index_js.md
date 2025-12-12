# index.js

**Path**: `src\plugins\json-preview-export\admin\src\components\JsonPreviewPanel\index.js`

## Summary
This React component provides a JSON preview panel for Strapi's content management system that displays the current content entry's data in API response format. It transforms the internal Strapi data structure by removing system fields (id, timestamps, user references) and wrapping the content in a standardized `data/attributes` format that matches what the API would return. The component includes functionality to toggle preview visibility, copy JSON to clipboard, and excludes certain content types from preview based on configuration rules.

## Function Details

### `JsonPreviewPanel`


### `transformDataForApi`

- **Parameters**: `data`

### `currentContentTypeValid`

- **Parameters**: `useMemo((`

### `copyToClipboard`


### `togglePreview`



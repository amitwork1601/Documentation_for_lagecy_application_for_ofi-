# translate.js

**Path**: `src\helpers\translate.js`

## Summary
This module provides utility functions for processing and transforming translations in a content management system. It handles markdown image syntax fixes (correcting malformed HTML anchor tags in markdown), slug generation from strings, and applies translation replacements to text content while preserving certain URLs and image paths. The code appears to support multilingual content management, specifically protecting ImageKit and media URLs from translation while allowing other text content to be transformed according to provided translation mappings.

## Function Details

### `hasImageExtension`

- **Parameters**: `filename`

### `removeTextAfterInline`

- **Parameters**: `str`

### `fixMarkdownImages`

- **Parameters**: `markdown`

### `stringToSlug`

- **Parameters**: `str`

### `transformTranslations`

- **Parameters**: `text, translations, key = null, table = null`

### `translationsReordered`

- **Parameters**: `translations.sort((a, b`

### `countSlashes`

- **Parameters**: `str`

### `getTranslations`

- **Parameters**: `strapi, body = null, maxRetries = 3`


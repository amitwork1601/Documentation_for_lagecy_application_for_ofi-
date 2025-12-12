# b2c-localizer.js

**Path**: `src\api\b2c-localizer\services\b2c-localizer.js`

## Summary
This Strapi service module provides localization functionality for B2C content, specifically handling URL path modifications and content synchronization with Algolia search. The main functionality includes processing content objects to automatically prepend locale-specific path segments to internal links and slugs (e.g., converting `](/page/)` to `](/{locale}/page/)`), extracting and replacing index-related keys between objects, and managing the transformation of content before syncing to Algolia's search index for multi-locale support.

## Function Details

### `updateQueryString`

- **Parameters**: `key, value, url`

### `addPathInSlugForAlgolia`

- **Parameters**: `str, path`

### `processAlgoliaObject`

- **Parameters**: `obj, path`

### `processRecursive`

- **Parameters**: `targetObj`

### `extractKeysWithIndex`

- **Parameters**: `obj`

### `traverse`

- **Parameters**: `obj, targetObj`

### `addPathInSlug`

- **Parameters**: `str, path`

### `replaceIndexKeys`

- **Parameters**: `obj1, obj2`

### `extractData`

- **Parameters**: `body, locale, config, faq = false`

### `update`

- **Parameters**: `config?.footer_replacements?.values.find(update`

### `hreflangCleaner`

- **Parameters**: `data, config`

### `hrefLangData`

- **Parameters**: `data.data.attributes.opengraph.hrefLang.map((lang`

### `removeObjectWithUrl`

- **Parameters**: `obj, targetUrl`

### `filtered`

- **Parameters**: `models.filter((model`

### `prefilteredHits`

- **Parameters**: `hits.filter((hit`


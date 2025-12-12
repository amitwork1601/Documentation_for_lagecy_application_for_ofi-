# sync-with-images.js

**Path**: `scripts\sync-with-images.js`

## Summary
This Node.js script synchronizes blog articles from a source CMS API to a Strapi instance, including downloading and re-uploading associated images. It fetches article data by slug from a remote CMS endpoint, downloads referenced images from the source server, and uploads them to the local Strapi media library while maintaining metadata like alternative text and captions.

## Function Details

### `fetchArticleFromSource`

- **Parameters**: `slug`

### `downloadAndUploadImage`

- **Parameters**: `strapi, sourceImage`

### `getOrCreateMediaId`

- **Parameters**: `strapi, sourceMedia`

### `processData`

- **Parameters**: `strapi, data, keyName = null`

### `mapped`

- **Parameters**: `await Promise.all(data.map(item`


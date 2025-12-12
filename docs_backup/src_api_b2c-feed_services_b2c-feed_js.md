# b2c-feed.js

**Path**: `src\api\b2c-feed\services\b2c-feed.js`

## Summary
This service integrates Strapi with Akeneo PIM (Product Information Management) and Algolia search to manage B2C product feeds. It handles authentication with Akeneo's OAuth API, synchronizes product attributes and data between systems, and transforms attribute data with proper localization and scoping for e-commerce product catalogs.

## Function Details

### `logAxiosError`

- **Parameters**: `error, context = 'API Request'`

### `getAkeneoAccessToken`

- **Parameters**: `endpoint, username, password, api_key, api_secret`

### `transformAttribute`

- **Parameters**: `attribute, scope, locale`

### `syncAkeneo`

- **Parameters**: `endpoint, username, password, api_key, api_secret, path, body`

### `filteredHits`

- **Parameters**: `hits.map((hit`


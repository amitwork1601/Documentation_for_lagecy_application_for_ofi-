# akeneo.js

**Path**: `src\api\akeneo\services\akeneo.js`

## Summary
This service integrates with the Akeneo PIM (Product Information Management) system to synchronize product data. It handles OAuth authentication with Akeneo's API, retrieves paginated product data through REST endpoints, and triggers updates to Strapi content types (specifically B2C USPs and product tabs) when Akeneo synchronization is enabled in the configuration.

## Function Details

### `generateAkeneoToken`

- **Parameters**: `userCredentialsAkeneo`

### `akeneoDataLoader`

- **Parameters**: `path, token`


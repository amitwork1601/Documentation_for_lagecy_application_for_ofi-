# b2c-shop-page.js

**Path**: `src\api\b2c-shop-page\controllers\b2c-shop-page.js`

## Summary
This Strapi controller manages B2C shop page data retrieval by fetching shop information with deep population of related entities (images, opening hours, special hours) and content blocks. It sorts shops by postal code, transforms image data to include only essential fields (id, url, alternativeText), and applies component-specific block transformations to prepare the data for frontend consumption.

## Function Details

### `populate`

- **Parameters**: `queryApi, uid`


# b2c-category.js

**Path**: `src\api\b2c-category\controllers\b2c-category.js`

## Summary
This Strapi controller manages B2C category endpoints, specifically implementing a `findSlug` method that retrieves category data by either slug string or numeric ID. It handles deep population of related data (products, variants, content blocks), transforms content blocks using specialized transformers, and prepares category product listings with cross-sell information for rendering on B2C storefronts.

## Function Details

### `populate`

- **Parameters**: `queryApi`


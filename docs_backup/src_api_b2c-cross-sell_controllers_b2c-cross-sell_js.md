# b2c-cross-sell.js

**Path**: `src\api\b2c-cross-sell\controllers\b2c-cross-sell.js`

## Summary
This Strapi controller manages B2C (business-to-consumer) cross-selling content retrieval by providing a custom `findSlug` method that fetches records by either slug string or numeric ID. The controller determines the lookup strategy based on whether the parameter is a valid integer, then retrieves the entity with deep population of relationships and returns a sanitized, transformed response suitable for displaying cross-sell product recommendations or related content to consumers.


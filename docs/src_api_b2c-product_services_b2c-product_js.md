# b2c-product.js

**Path**: `src\api\b2c-product\services\b2c-product.js`

## Summary
This service manages B2C (business-to-consumer) product visibility and availability logic for a Strapi-based e-commerce system. It determines whether products should be viewable based on product variants' display settings and stock availability, then prepares product data for Algolia search indexing by tagging unavailable or non-viewable products appropriately to control their search visibility.


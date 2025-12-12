# algolia.json

**Path**: `src\api\b2c-product\content-types\b2c-product\algolia.json`

## Summary
This is an Algolia search index configuration file for B2C e-commerce products in a Strapi CMS. It defines which product fields should be indexed in Algolia's "strapi_ecommerce_product" index, explicitly omitting metadata, media assets, related entities, and complex nested data (like reviews, recommendations, and product relationships) to optimize search performance while keeping indexed content under 750 characters per string field.


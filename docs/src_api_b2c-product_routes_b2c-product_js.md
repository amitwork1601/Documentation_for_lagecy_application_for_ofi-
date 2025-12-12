# b2c-product.js

**Path**: `src\api\b2c-product\routes\b2c-product.js`

## Summary
This file defines custom API routes for B2C (Business-to-Consumer) product management in a Strapi CMS application. It extends the default CRUD router by adding specialized endpoints for retrieving products by SKU, slug, category, and product variant images, while disabling the standard "findOne" route in favor of these more specific lookup methods.

## Function Details

### `customRouter`

- **Parameters**: `innerRouter, extraRoutes = []`


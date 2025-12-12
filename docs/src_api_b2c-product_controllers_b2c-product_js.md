# b2c-product.js

**Path**: `src\api\b2c-product\controllers\b2c-product.js`

## Summary
This is a Strapi CMS controller for managing B2C product pages with dynamic content rendering. It provides different population strategies (render levels 1 and 2) to fetch product data with varying depths of related content including filters, recommendations, ingredients, USPs, and product tabs. The controller uses helper functions to deeply populate nested relationships and transform block content, allowing flexible API responses based on query parameters for optimized data fetching in different UI contexts.

## Function Details

### `isEmpty`

- **Parameters**: `object`

### `populate`

- **Parameters**: `strapi, render, queryApi = false, slug = false`

### `getEntityPropertiesByRender`

- **Parameters**: `entity, render, slugOrSku`

### `filterProducts`

- **Parameters**: `products`

### `categoryId`

- **Parameters**: `products.find((p`


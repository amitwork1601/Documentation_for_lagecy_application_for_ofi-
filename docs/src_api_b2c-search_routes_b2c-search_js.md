# b2c-search.js

**Path**: `src\api\b2c-search\routes\b2c-search.js`

## Summary
This file defines a custom Strapi router for B2C search functionality that extends the default CRUD operations. It creates a router that excludes the standard "findOne" endpoint and adds a custom GET route (`/b2c-searches/:locale`) to retrieve search data filtered by locale, enabling location or language-specific search results for business-to-consumer operations.

## Function Details

### `customRouter`

- **Parameters**: `innerRouter, extraRoutes = []`


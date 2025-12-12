# b2c-page.js

**Path**: `src\api\b2c-page\routes\b2c-page.js`

## Summary
This code defines a Strapi router for B2C (Business-to-Consumer) pages that extends the default CRUD router by removing the standard `findOne` route and replacing it with a custom route that finds pages by slug (`/b2c-pages/:slug`) instead of by ID. The custom router implementation allows combining default Strapi routes with additional custom routes, enabling content retrieval using SEO-friendly slug URLs rather than database IDs for B2C page lookups.

## Function Details

### `customRouter`

- **Parameters**: `innerRouter, extraRoutes = []`


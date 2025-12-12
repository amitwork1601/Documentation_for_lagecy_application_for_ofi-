# b2c-category.js

**Path**: `src\api\b2c-category\routes\b2c-category.js`

## Summary
This code defines a custom router for B2C (Business-to-Consumer) category endpoints in a Strapi CMS application. It extends the default CRUD router by removing the standard "findOne" route and adding a custom route that finds categories by slug instead of ID (`/b2c-categories/:slug`), enabling more SEO-friendly URLs for category lookups. The custom router wrapper allows combining the core Strapi router functionality with additional custom route definitions while maintaining the standard router interface.

## Function Details

### `customRouter`

- **Parameters**: `innerRouter, extraRoutes = []`


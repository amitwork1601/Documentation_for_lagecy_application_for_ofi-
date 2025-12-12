# b2c-landing-page.js

**Path**: `src\api\b2c-landing-page\routes\b2c-landing-page.js`

## Summary
This Strapi router configures API endpoints for B2C landing pages, creating a customized router that extends the default CRUD operations by excluding the standard "findOne" route and adding a custom GET endpoint that retrieves landing pages by slug (`/b2c-landing-pages/:slug`) instead of by ID. The custom router pattern allows merging core Strapi routes with additional business-specific routes while maintaining the framework's routing structure.

## Function Details

### `customRouter`

- **Parameters**: `innerRouter, extraRoutes = []`


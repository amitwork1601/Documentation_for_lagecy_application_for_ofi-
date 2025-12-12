# b2c-cross-sell.js

**Path**: `src\api\b2c-cross-sell\routes\b2c-cross-sell.js`

## Summary
This code defines a custom router for the B2C cross-sell API endpoint in a Strapi application, which manages product cross-selling recommendations for business-to-consumer scenarios. It extends the default CRUD router by removing the standard "findOne" route and adding a custom GET route that retrieves cross-sell data by slug (`/b2c-cross-sells/:slug`) instead of by ID, enabling more user-friendly URL patterns for accessing cross-sell configurations.

## Function Details

### `customRouter`

- **Parameters**: `innerRouter, extraRoutes = []`


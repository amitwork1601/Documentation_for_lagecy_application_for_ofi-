# shop.js

**Path**: `src\api\shop\routes\shop.js`

## Summary
This code defines a custom Strapi router for the "shop" content type that extends the default CRUD operations. It removes the standard "findOne" route and adds a custom route to fetch shops by slug (`/shops/:slug`) instead of by ID, allowing for more user-friendly URL patterns in the shop API.

## Function Details

### `customRouter`

- **Parameters**: `innerRouter, extraRoutes = []`


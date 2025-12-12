# b2c-echantillon.js

**Path**: `src\api\b2c-echantillon\routes\b2c-echantillon.js`

## Summary
This file defines a custom Strapi router for B2C sample ("échantillon") resources that extends the default CRUD operations. It removes the standard "findOne" route and adds a custom GET endpoint that retrieves samples by slug instead of ID (`/b2c-echantillons/:slug`), enabling more user-friendly URL patterns for accessing sample product information in a B2C e-commerce context.

## Function Details

### `customRouter`

- **Parameters**: `innerRouter, extraRoutes = []`


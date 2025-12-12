# b2c-recommendation.js

**Path**: `src\api\b2c-recommendation\routes\b2c-recommendation.js`

## Summary
This file defines a custom router for a B2C recommendation API endpoint in a Strapi application. It extends the default CRUD router by excluding the "findOne" operation and adding two custom routes (GET and POST) at `/b2c-recommendation/getReco` for retrieving product or service recommendations, likely used to provide personalized suggestions to B2C customers.

## Function Details

### `customRouter`

- **Parameters**: `innerRouter, extraRoutes = []`


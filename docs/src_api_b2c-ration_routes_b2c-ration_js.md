# b2c-ration.js

**Path**: `src\api\b2c-ration\routes\b2c-ration.js`

## Summary
This code defines a custom Strapi router for the B2C ration API endpoint that extends the default CRUD operations (excluding "findOne") with an additional custom route. It adds a specialized GET endpoint `/b2c-rations/getReco` that likely retrieves personalized ration recommendations for B2C (business-to-consumer) users, combining standard content management functionality with custom recommendation logic.

## Function Details

### `customRouter`

- **Parameters**: `innerRouter, extraRoutes = []`


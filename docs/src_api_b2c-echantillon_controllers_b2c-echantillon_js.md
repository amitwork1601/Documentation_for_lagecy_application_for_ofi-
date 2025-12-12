# b2c-echantillon.js

**Path**: `src\api\b2c-echantillon\controllers\b2c-echantillon.js`

## Summary
This is a Strapi CMS controller for managing B2C product samples ("echantillon" means sample in French) that provides a custom endpoint to retrieve sample records by either slug or numeric ID. The controller implements deep population of related entities (including images and dynamic content zones called "push"), sanitizes the response by filtering image fields to only include essential properties (id, url, alternativeText), and returns the properly formatted entity data for frontend consumption.

## Function Details

### `populate`

- **Parameters**: `queryApi`


# b2c-homepage.js

**Path**: `src\api\b2c-homepage\controllers\b2c-homepage.js`

## Summary
This Strapi controller manages the B2C homepage content by fetching and transforming homepage entities with deeply populated relationships. It retrieves homepage data including dynamic content blocks, applies component-specific transformations via blocksTransformer, and enriches the response with structured schema data (categories and shop locations with opening hours) for SEO purposes. The controller serves as the API endpoint for delivering fully hydrated homepage content to the B2C frontend application.

## Function Details

### `populate`



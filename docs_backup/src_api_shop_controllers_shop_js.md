# shop.js

**Path**: `src\api\shop\controllers\shop.js`

## Summary
This is a Strapi CMS controller for managing shop pages that can be retrieved by either slug or numeric ID. It handles deep population of related content blocks, applies component-specific transformations to dynamic content sections, and enriches the response with cross-sell product data before returning sanitized shop page entities to API consumers.

## Function Details

### `populate`

- **Parameters**: `queryApi`


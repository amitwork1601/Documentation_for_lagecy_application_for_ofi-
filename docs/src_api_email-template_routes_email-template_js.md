# email-template.js

**Path**: `src\api\email-template\routes\email-template.js`

## Summary
This code defines a Strapi router for email templates that combines core CRUD operations (find, findOne) with a custom POST endpoint for rendering email templates by slug. The custom router pattern allows extending the default Strapi REST routes with a `/email-templates/:slug` endpoint that handles template rendering, enabling the application to retrieve template content and dynamically generate emails based on template identifiers.

## Function Details

### `customRouter`

- **Parameters**: `innerRouter, extraRoutes = []`


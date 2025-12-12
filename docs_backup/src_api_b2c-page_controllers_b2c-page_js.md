# b2c-page.js

**Path**: `src\api\b2c-page\controllers\b2c-page.js`

## Summary
This is a Strapi CMS controller for B2C (business-to-consumer) pages that handles retrieving page content by slug or ID. It performs deep population of related content, applies component-specific transformations to content blocks, and handles cross-sell data transformation before returning sanitized page responses. The controller supports flexible querying with either string slugs or numeric IDs as identifiers.

## Function Details

### `populate`

- **Parameters**: `queryApi`


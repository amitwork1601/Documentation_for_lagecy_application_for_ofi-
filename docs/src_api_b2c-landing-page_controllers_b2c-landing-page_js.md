# b2c-landing-page.js

**Path**: `src\api\b2c-landing-page\controllers\b2c-landing-page.js`

## Summary
This Strapi controller manages B2C (Business-to-Consumer) landing page retrieval by slug or ID. It implements a custom `findSlug` method that fetches landing page content with deep population of related data, handles both slug-based and ID-based lookups, and transforms the response to include cross-sell information before returning sanitized landing page data to the API consumer.

## Function Details

### `populate`

- **Parameters**: `queryApi`


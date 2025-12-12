# b2c-subscription-page.js

**Path**: `src\api\b2c-subscription-page\controllers\b2c-subscription-page.js`

## Summary
This is a Strapi CMS controller for managing a B2C subscription page single-type content entity. It provides a custom `find` method that retrieves the subscription page data with deep population of related content fields, applies content-specific population strategies for main content and "next order" content sections, and transforms the response to include cross-sell product information before returning the sanitized data to the client.


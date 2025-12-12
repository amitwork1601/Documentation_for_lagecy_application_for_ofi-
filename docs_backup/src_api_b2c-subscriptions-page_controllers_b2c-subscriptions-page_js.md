# b2c-subscriptions-page.js

**Path**: `src\api\b2c-subscriptions-page\controllers\b2c-subscriptions-page.js`

## Summary
This is a Strapi CMS controller for managing a B2C subscriptions page, which retrieves and formats subscription-related content for customer-facing display. The controller's `find` method fetches deeply populated page data (including dynamic content sections and "no content" states), sanitizes it for security, and applies cross-sell transformations to enhance the response with related product/service recommendations. It serves as the API endpoint that delivers structured subscription page content to the frontend application.


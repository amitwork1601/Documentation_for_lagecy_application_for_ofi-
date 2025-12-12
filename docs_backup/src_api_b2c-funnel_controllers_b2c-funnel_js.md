# b2c-funnel.js

**Path**: `src\api\b2c-funnel\controllers\b2c-funnel.js`

## Summary
This Strapi controller manages the B2C (business-to-consumer) checkout funnel API endpoint, specifically handling the retrieval of funnel configuration data. It customizes the `find` method to deeply populate related data including shipping and payment step content, sanitizes the output, and returns a properly formatted response for rendering the checkout flow in a B2C e-commerce application.


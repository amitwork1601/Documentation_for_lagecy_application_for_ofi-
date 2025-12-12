# b2c-faq-question.js

**Path**: `src\api\b2c-faq-question\routes\b2c-faq-question.js`

## Summary
This code defines a Strapi router for B2C (Business-to-Consumer) FAQ questions that extends the default CRUD operations by removing the standard "findOne" route and adding a custom route to retrieve FAQ questions by slug instead of ID. The custom router implementation allows for flexible route extension while maintaining the core router functionality, enabling users to access FAQ questions via SEO-friendly slug URLs (e.g., `/b2c-faq-questions/how-to-reset-password`) rather than numeric identifiers.

## Function Details

### `customRouter`

- **Parameters**: `innerRouter, extraRoutes = []`


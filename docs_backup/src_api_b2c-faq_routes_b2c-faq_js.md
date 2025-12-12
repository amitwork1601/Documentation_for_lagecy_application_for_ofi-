# b2c-faq.js

**Path**: `src\api\b2c-faq\routes\b2c-faq.js`

## Summary
This code defines a custom Strapi router for B2C (Business-to-Consumer) FAQ content that extends the default CRUD operations by excluding the standard "findOne" endpoint and adding a custom locale-based retrieval endpoint. The router allows fetching FAQ entries by locale using the path `/b2c-faqs/:locale`, enabling internationalization support for FAQ content while maintaining other standard REST API operations (create, update, delete, find all).

## Function Details

### `customRouter`

- **Parameters**: `innerRouter, extraRoutes = []`


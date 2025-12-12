# b2c-faq-subject.js

**Path**: `src\api\b2c-faq-subject\routes\b2c-faq-subject.js`

## Summary
This code defines a custom Strapi router for B2C FAQ subjects that extends the default CRUD operations by adding a custom route to fetch FAQ subjects by slug instead of ID. It disables the standard "findOne" route and replaces it with a slug-based lookup endpoint (`/b2c-faq-subjects/:slug`), which is more user-friendly for client-facing FAQ categorization and retrieval.

## Function Details

### `customRouter`

- **Parameters**: `innerRouter, extraRoutes = []`


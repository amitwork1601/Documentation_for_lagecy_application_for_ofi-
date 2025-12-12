# b2c-faq-question.js

**Path**: `src\api\b2c-faq-question\controllers\b2c-faq-question.js`

## Summary
This Strapi controller manages B2C FAQ question content by providing a custom `findSlug` method that retrieves FAQ questions either by their slug (text identifier) or numeric ID. The controller intelligently determines whether the provided parameter is a slug or ID, then fetches the corresponding FAQ question record with deep population of related data, sanitizes it, and returns the transformed response.


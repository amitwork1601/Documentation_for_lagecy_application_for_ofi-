# b2c-faq.js

**Path**: `src\api\b2c-faq\controllers\b2c-faq.js`

## Summary
This controller manages B2C (Business-to-Consumer) FAQ content retrieval in a Strapi CMS application. It provides a custom `findLocale` method that fetches FAQ records either by locale string (e.g., "en", "fr") or numeric ID, sanitizes the output, and returns the appropriate FAQ content for the requested locale, enabling multi-language FAQ support for customer-facing applications.


# b2c-search.js

**Path**: `src\api\b2c-search\controllers\b2c-search.js`

## Summary
This is a Strapi CMS controller for B2C search functionality that provides a custom `findLocale` method to retrieve search page content based on locale identifiers. It intelligently handles both numeric IDs and locale codes (e.g., "en-US") by checking if the parameter is a numeric ID or a locale string, then queries the database accordingly and returns the sanitized search page entity for the requested locale.


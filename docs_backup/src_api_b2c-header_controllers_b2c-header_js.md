# b2c-header.js

**Path**: `src\api\b2c-header\controllers\b2c-header.js`

## Summary
This is a Strapi CMS controller for managing B2C (business-to-consumer) header content, likely for a website's navigation or top banner area. It provides two endpoints: `find()` to retrieve the header configuration as a single-type entity, and `findOne()` to fetch a specific header entry either by numeric ID or by slug, both using deep population to include all related nested content. The controller ensures proper data sanitization and transformation before returning responses to API consumers.


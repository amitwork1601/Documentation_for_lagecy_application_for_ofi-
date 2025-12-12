# bootstrap.js

**Path**: `src\plugins\algolia\server\bootstrap.js`

## Summary
This bootstrap file registers a custom permission action for the Algolia plugin in a Strapi CMS application. It defines and registers a "Sync" permission action that allows administrators to control which users can synchronize data between Strapi and Algolia search service. This runs during Strapi's bootstrap phase to ensure the permission is available in the admin panel's role-based access control system.


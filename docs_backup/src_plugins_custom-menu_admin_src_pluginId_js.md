# pluginId.js

**Path**: `src\plugins\custom-menu\admin\src\pluginId.js`

## Summary
This module extracts and exports a normalized plugin identifier from the package.json name by stripping common Strapi plugin naming prefixes (scoped packages like `@scope/plugin-*` or `strapi-plugin-*`). It serves as a centralized way to reference the plugin's ID throughout the admin interface, ensuring consistency when the plugin is registered with Strapi's plugin system.


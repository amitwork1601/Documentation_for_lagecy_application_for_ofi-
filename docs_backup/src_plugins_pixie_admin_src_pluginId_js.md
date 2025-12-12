# pluginId.js

**Path**: `src\plugins\pixie\admin\src\pluginId.js`

## Summary
This module extracts and exports a normalized plugin identifier by parsing the plugin's package name from package.json. It removes common Strapi plugin naming prefixes (scoped packages starting with `@`, or `strapi-plugin-`) to create a clean, standardized plugin ID used throughout the Strapi admin panel for plugin registration and identification.


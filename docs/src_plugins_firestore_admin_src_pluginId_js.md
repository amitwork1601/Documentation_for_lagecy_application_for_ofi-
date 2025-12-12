# pluginId.js

**Path**: `src\plugins\firestore\admin\src\pluginId.js`

## Summary
This module extracts and exports a normalized plugin identifier from the package.json file by removing common Strapi plugin naming prefixes (scoped packages like `@scope/plugin-*` or `strapi-plugin-*`). It serves as a centralized source for the plugin's unique ID used throughout the Strapi admin panel, ensuring consistent plugin identification regardless of the package naming convention used.


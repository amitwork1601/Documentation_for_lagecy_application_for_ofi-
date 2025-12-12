# pluginId.js

**Path**: `src\plugins\import-akeneo\admin\src\pluginId.js`

## Summary
This module extracts and exports a normalized plugin identifier by parsing the plugin's package name and removing standard Strapi plugin naming prefixes (such as `@scope/plugin-`, `strapi-plugin-`, etc.). It serves as a centralized way to derive the plugin's ID for the Akeneo import plugin, ensuring consistent identification throughout the Strapi admin panel by stripping away namespace conventions while preserving the actual plugin name.


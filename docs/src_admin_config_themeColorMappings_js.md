# themeColorMappings.js

**Path**: `src\admin\config\themeColorMappings.js`

## Summary
This configuration file centralizes theme-to-color mappings for a B2C e-commerce CMS (likely Strapi), defining hex color values for different visual themes across product tags (e.g., "Nouveauté" → green, "Promotion" → order green), editorial content, and review components. It provides a single source of truth for maintaining consistent color schemes across the application's content types and includes utility functions to identify which component a theme belongs to.

## Function Details

### `isEditoTheme`

- **Parameters**: `themeValue`

### `isReviewCmsTheme`

- **Parameters**: `themeValue`

### `getThemeColorConfig`

- **Parameters**: `contentTypeUID, modifiedData`


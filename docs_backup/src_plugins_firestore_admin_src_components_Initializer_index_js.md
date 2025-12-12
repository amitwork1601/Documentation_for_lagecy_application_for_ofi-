# index.js

**Path**: `src\plugins\firestore\admin\src\components\Initializer\index.js`

## Summary
This React component serves as a plugin initialization hook for the Firestore admin plugin within a Strapi application. It uses the `useEffect` hook to register the plugin by calling `setPlugin` with the plugin's ID once when the component mounts, ensuring the plugin is properly registered with the Strapi admin panel. The component renders nothing (returns null) as it exists solely to perform this side-effect initialization during the plugin bootstrap process.

## Function Details

### `Initializer`

- **Parameters**: `{ setPlugin }`


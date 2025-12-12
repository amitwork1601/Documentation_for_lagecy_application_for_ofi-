# ImageItem.js

**Path**: `src\plugins\custom-menu\admin\src\components\customMenu\menu\ImageItem.js`

## Summary
This React component provides a form interface for managing image data in a Strapi custom menu plugin, specifically allowing users to input an image URL and alternative text. The component uses a trigger-based state management pattern to propagate changes to its parent component through the `handleChangeImage` callback, ensuring that image data updates are properly synchronized when either the URL or alternative text fields are modified.

## Function Details

### `ImageItem`

- **Parameters**: `{ required, dataImage, handleChangeImage }`


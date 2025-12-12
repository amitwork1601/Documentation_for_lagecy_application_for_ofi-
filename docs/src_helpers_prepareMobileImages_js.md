# prepareMobileImages.js

**Path**: `src\helpers\prepareMobileImages.js`

## Summary
This utility function recursively traverses an object or array structure and removes all `formats` properties, which are typically used to store multiple image size variants (thumbnail, small, medium, large) in content management systems like Strapi. It exists to optimize mobile payloads by stripping out unnecessary image format metadata, reducing the data transferred to mobile clients while keeping the base image references intact.

## Function Details

### `prepareMobileImages`

- **Parameters**: `obj`


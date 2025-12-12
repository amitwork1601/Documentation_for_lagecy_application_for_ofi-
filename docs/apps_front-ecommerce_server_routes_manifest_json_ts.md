# manifest.json.ts

**Path**: `apps\front-ecommerce\server\routes\manifest.json.ts`

## Summary
This file defines a server-side event handler that dynamically generates a Progressive Web App (PWA) manifest.json file for an e-commerce front-end application. It recursively scans the `/public/icons` directory to collect app icons, retrieves localized metadata (app name, description, theme colors) using internationalization, and returns a properly formatted manifest with appropriate caching headers for PWA installation and display configuration.

## Interfaces
- `fileProperty`

## Function Details

### `getFiles`

- **Parameters**: `dir: string, files: fileProperty[] = []`


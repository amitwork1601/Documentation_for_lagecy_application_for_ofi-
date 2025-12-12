# manifest.json.ts

**Path**: `apps\front-ecommerce-b2b\server\routes\manifest.json.ts`

## Summary
This code defines a server-side event handler that dynamically generates a Progressive Web App (PWA) manifest.json file for a B2B e-commerce application. It scans the `/public/icons` directory to collect app icon files, retrieves localized metadata (app name, description, colors) using internationalization utilities, and returns a properly formatted manifest object with appropriate HTTP headers and caching directives for PWA installation and branding.

## Interfaces
- `fileProperty`

## Function Details

### `getFiles`

- **Parameters**: `dir: string, files: fileProperty[] = []`


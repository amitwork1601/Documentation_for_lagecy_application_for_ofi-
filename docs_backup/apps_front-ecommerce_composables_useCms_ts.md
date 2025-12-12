# useCms.ts

**Path**: `apps\front-ecommerce\composables\useCms.ts`

## Summary
This composable manages CMS (Content Management System) page metadata and caching for a Strapi-based e-commerce front-end. It provides a `PageMetaData` class that handles lazy loading, hydration, and caching of CMS pages (including headers, footers, and composite pages) with support for internationalization and SSR payload management. The code implements a singleton-like pattern with global state management to avoid redundant API calls and efficiently reuse CMS content across the application.

## Classes
- `PageMetaData`

## Interfaces
- `ResponseItem`

## Function Details

### `useCms`

- **Parameters**: `$i18n?: VueI18n`

### `clear`


### `getHeader`


### `getFooter`


### `getCmsProductBySku`

- **Parameters**: `sku: string`

### `getCrossSell`

- **Parameters**: `slug: string`

### `getCrossSellByAnimalType`

- **Parameters**: `animalType: string`

### `getCrossSellDivers`



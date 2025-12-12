# useCatalog.ts

**Path**: `apps\front-ecommerce\composables\useCatalog.ts`

## Summary
This composable manages a centralized catalog cache for e-commerce products, tracking their loading states (empty, summary, or full) and storing product metadata indexed by SKU or slug. It provides functionality to hydrate, fetch, and manage product data from a Strapi CMS backend while preventing duplicate requests through a Map-based caching system with pending promise tracking.

## Classes
- `ProductMetadata`
- `ProductMetadata`

## Type Aliases
- `TLoadedStateProduct`
- `SkuOrSlug`
- `ProvideFunction`

## Function Details

### `useCatalog`


### `getOrCreateProductMetadata`

- **Parameters**: `key: SkuOrSlug`

### `clear`


### `requestedProductsMetadata`

- **Parameters**: `keys.map((sku`


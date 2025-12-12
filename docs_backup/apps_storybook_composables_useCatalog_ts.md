# useCatalog.ts

**Path**: `apps\storybook\composables\useCatalog.ts`

## Summary
This is a mock implementation of a product catalog composable for Storybook testing purposes in an e-commerce application. It provides functions to retrieve dog and cat product data by SKU from mock data sources, wrapping them in `ProductMetadata` objects with configurable loading states (empty, summary, or full). The composable serves as a test harness to simulate the real `useCatalog` behavior without requiring actual API calls or backend services.

## Type Aliases
- `LoadedStateProduct`
- `ProductType`

## Function Details

### `useCatalog`


### `getProductBySku`

- **Parameters**: `sku: string`


# useOrderItem.ts

**Path**: `apps\front-ecommerce\composables\useOrderItem.ts`

## Summary
This composable provides utility functions for handling order and subscription items in an e-commerce application. It includes type guards to distinguish between `IOrderItem` and `ISubscriptionItem` types, generates fallback product images using ImageKit based on variant codes, and extracts product codes and names from either order or subscription items by navigating their different data structures.

## Function Details

### `useOrderItem`


### `fallbackImage`

- **Parameters**: `variantCode: string`


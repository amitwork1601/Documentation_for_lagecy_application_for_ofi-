# useProductTagsEngine.ts

**Path**: `modules\nuxt-ecommerce\src\runtime\composables\useProductTagsEngine.ts`

## Summary
This composable manages the loading state and data for Pixie marketing product tags in an e-commerce application. It listens to runtime hooks to track when product tag configurations are being fetched from the marketing system, stores the loaded configurations, and provides reactive references for both the tags data and loading state, with a 10-second timeout fallback to prevent indefinite loading states.

## Function Details

### `useProductTagsEngine`



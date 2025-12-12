# SearchResults.vue

**Path**: `apps\front-ecommerce\components\search\SearchResults.vue`

## Summary
This Vue component implements a search results display page for an e-commerce site using Algolia search. It handles rendering and tracking of search hits across multiple index types (products, blog articles, categories), manages pagination, and provides cross-sell recommendations when searches are empty. The component integrates Algolia's Vue InstantSearch library with custom tracking events and price calculations for product results.

## Function Details

### `getProductMetaData`

- **Parameters**: `item: IStrapiProduct`

### `reloadHits`

- **Parameters**: `status: string, results: AlgoliaResults`

### `crossSellEmptySearch`

- **Parameters**: `computedAsync(async (`


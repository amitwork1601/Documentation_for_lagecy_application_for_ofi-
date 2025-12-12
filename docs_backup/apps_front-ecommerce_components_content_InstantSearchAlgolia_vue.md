# InstantSearchAlgolia.vue

**Path**: `apps\front-ecommerce\components\content\InstantSearchAlgolia.vue`

## Summary
This Vue component implements an Algolia-powered instant search interface for an e-commerce application. It configures multiple search indexes (products, categories, articles) based on CMS-controlled settings from Strapi, allowing selective enabling/disabling of different content types in the search results. The component integrates Algolia's InstantSearch UI library with Vue 3 and manages search tabs, query state, and index configuration dynamically based on the page's content settings.

## Function Details

### `closeKeyboard`

- **Parameters**: `event: Event`

### `computedIndexes`

- **Parameters**: `computed<Partial<IAlgoliaIndexes>>((`

### `changeTab`

- **Parameters**: `$event: string`


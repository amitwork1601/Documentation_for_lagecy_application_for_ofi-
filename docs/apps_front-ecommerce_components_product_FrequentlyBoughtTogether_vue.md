# FrequentlyBoughtTogether.vue

**Path**: `apps\front-ecommerce\components\product\FrequentlyBoughtTogether.vue`

## Summary
This Vue component implements a "Frequently Bought Together" product recommendation feature for an e-commerce product page. It fetches and displays a list of related products based on SKUs, tracks user interactions (item list views and item selections) for analytics purposes, and uses intersection observer to detect when the component becomes visible in the viewport. The component integrates with the catalog system to retrieve product metadata and utilizes tracking composables to send analytics events following e-commerce tracking standards.

## Function Details

### `trackingOnViewItemList`


### `trackingSelectItem`

- **Parameters**: `item: ProductMetadata, position: number`

### `sourceItemList`

- **Parameters**: `computed((`


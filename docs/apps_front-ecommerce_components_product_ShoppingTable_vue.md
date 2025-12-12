# ShoppingTable.vue

**Path**: `apps\front-ecommerce\components\product\ShoppingTable.vue`

## Summary
This Vue component renders a shopping table for product variants in an e-commerce application, allowing users to view different product formats (regular and subscription options) and add items to their cart. It integrates with the cart store and a shopping product composable to manage product variants from both Strapi (CMS) and Sylius (e-commerce platform), handling stock availability, pricing, and subscription frequencies. The component displays product format options in a table layout with conditional rendering based on feature flags for subscription functionality.

## Function Details

### `frequencyItem`

- **Parameters**: `computed((`


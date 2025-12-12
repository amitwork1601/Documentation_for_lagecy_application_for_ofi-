# UserGuideProducts.vue

**Path**: `apps\front-ecommerce\components\userGuide\UserGuideProducts.vue`

## Summary
This Vue component displays and manages a product recommendation list within an e-commerce user guide, specifically for animal-related products. It handles product selection, tracks analytics events when products are viewed (using `TrackingEventOnViewItemList`), and automatically scrolls to show the selected product in the list. The component receives product data, animal form information, and Sylius product details as props, and manages a two-way binding for the currently selected product while computing base prices and frequencies for display.

## Function Details

### `trackingOnViewItemList`



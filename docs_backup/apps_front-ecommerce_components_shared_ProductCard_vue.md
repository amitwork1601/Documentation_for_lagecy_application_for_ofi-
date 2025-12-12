# ProductCard.vue

**Path**: `apps\front-ecommerce\components\shared\ProductCard.vue`

## Summary
This Vue component renders a product card for an e-commerce storefront, displaying product information from both metadata and Sylius product data. It handles product navigation, add-to-cart functionality, tracking events (cart additions, modal views), and supports features like lazy loading, wishlist management, subscription-only mode, and different display modes (PLP). The component serves as a reusable building block for product listings throughout the e-commerce application, integrating with the shopping cart system and analytics tracking.

## Function Details

### `getQuery`


### `onClickCard`


### `openAddToCartDialog`


### `closeDialog`


### `onAddedToCart`

- **Parameters**: `data: TEmitAddToCart`

### `trackingOnAddToCart`

- **Parameters**: `data: TEmitAddToCart`

### `trackingSubscriptionModalView`

- **Parameters**: `view?: boolean`

### `computedProductUrl`

- **Parameters**: `computed((`


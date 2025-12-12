# useCart.ts

**Path**: `apps\front-ecommerce\composables\useCart.ts`

## Summary
This composable manages e-commerce shopping cart functionality, providing computed access to cart items, upsells, and free products. It fetches product details for cart items by retrieving product codes from the cart's order items and enriching them with catalog data, while optionally supporting upsell recommendations. The composable can work with either a provided cart context or fall back to the global cart store, making it flexible for use across different components in the e-commerce application.

## Function Details

### `items`

- **Parameters**: `computedAsync(async (`

### `freeProducts`

- **Parameters**: `computedAsync(async (`

### `upSells`

- **Parameters**: `computedAsync(async (`

### `crossSellsProductOffer`

- **Parameters**: `computedAsync(async (`


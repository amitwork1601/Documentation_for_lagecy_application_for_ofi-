# useShoppingProduct.ts

**Path**: `apps\front-ecommerce\composables\useShoppingProduct.ts`

## Summary
This composable manages shopping product functionality for an e-commerce application, handling both Strapi metadata and Sylius product data. It provides computed properties and logic to determine product variant availability (in-stock status, regular vs. subscription pricing), filters variants based on classification types (regular/subscription), and manages cart operations including frequency calculations for subscription products. The composable serves as a bridge between the product catalog display and shopping cart functionality, enabling proper variant selection and add-to-cart workflows.

## Function Details

### `addToCart`

- **Parameters**: `data: TEmitAddToCart`

### `isInStock`

- **Parameters**: `computed((`

### `regularVariants`

- **Parameters**: `computed((`

### `subscriptionVariants`

- **Parameters**: `computed((`


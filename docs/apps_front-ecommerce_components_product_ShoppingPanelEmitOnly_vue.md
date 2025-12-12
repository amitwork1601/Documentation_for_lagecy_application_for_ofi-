# ShoppingPanelEmitOnly.vue

**Path**: `apps\front-ecommerce\components\product\ShoppingPanelEmitOnly.vue`

## Summary
This Vue component provides a shopping panel interface for e-commerce product selection and cart management. It handles variant selection, quantity management, and emits cart-related events (addToCart, errors) to parent components while managing stock availability checks through both Sylius and Strapi product data sources. The component implements a "emit-only" pattern, delegating actual cart operations to parent components while managing the UI state and validation logic locally.

## Function Details

### `changeSelectedVariant`

- **Parameters**: `variant: TShoppingVariant`

### `addToCart`


### `handleSubmit`


### `selectedVariantInStock`

- **Parameters**: `computed((`

### `regularVariant`

- **Parameters**: `computed((`


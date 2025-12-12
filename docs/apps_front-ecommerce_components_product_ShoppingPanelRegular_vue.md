# ShoppingPanelRegular.vue

**Path**: `apps\front-ecommerce\components\product\ShoppingPanelRegular.vue`

## Summary
This Vue component manages the shopping panel for regular (non-subscription) product purchases in an e-commerce application. It handles product variant selection, quantity management, and add-to-cart functionality while checking customer subscription status to determine whether to show regular purchase options or redirect to subscription management. The component coordinates between the cart store, customer store, and product data (both internal and Sylius-based) to present appropriate purchase options based on stock availability and the customer's existing subscription state.

## Function Details

### `changeShoppingPanelOptionActive`

- **Parameters**: `isSubscription: boolean`

### `changeSelectedVariant`

- **Parameters**: `variant: TShoppingVariant`

### `addToCart`

- **Parameters**: `newFrequency?: number`

### `updateFrequency`

- **Parameters**: `newFrequency: IFrequency`

### `handleSubmit`

- **Parameters**: `event?: number`

### `selectedVariantInStock`

- **Parameters**: `computed((`

### `regularVariant`

- **Parameters**: `computed((`

### `subscriptionVariant`

- **Parameters**: `computed((`

### `frequencyItem`

- **Parameters**: `computed((`

### `redirect`

- **Parameters**: `computed((`


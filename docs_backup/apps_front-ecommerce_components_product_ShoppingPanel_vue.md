# ShoppingPanel.vue

**Path**: `apps\front-ecommerce\components\product\ShoppingPanel.vue`

## Summary
This Vue component serves as a router/wrapper for product shopping panels in an e-commerce application, conditionally rendering either a regular purchase panel or a subscription-based purchase panel based on URL query parameters. It delegates to `ShoppingPanelRegular` or `ShoppingPanelSubscription` child components, passing through product data (including Sylius e-commerce platform integration), loading states, and cart-related events while maintaining a consistent interface for both purchase types.


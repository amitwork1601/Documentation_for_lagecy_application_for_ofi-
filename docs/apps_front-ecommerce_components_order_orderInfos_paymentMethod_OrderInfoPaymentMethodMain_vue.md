# OrderInfoPaymentMethodMain.vue

**Path**: `apps\front-ecommerce\components\order\orderInfos\paymentMethod\OrderInfoPaymentMethodMain.vue`

## Summary
This Vue component manages the payment method display and updates for orders and subscriptions in an e-commerce application. It handles payment method changes by processing callbacks from Checkout.com (via query parameters like `cko-session-id`), updating the payment instrument through backend API calls, and providing UI for editing payment methods on active subscriptions. The component supports both one-time orders and recurring subscription orders, with logic to determine editability based on subscription state.

## Function Details

### `subscriptionIri`

- **Parameters**: `computed((`

### `currentOrder`

- **Parameters**: `computed((`


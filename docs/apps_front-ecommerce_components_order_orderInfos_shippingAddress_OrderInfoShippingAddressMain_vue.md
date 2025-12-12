# OrderInfoShippingAddressMain.vue

**Path**: `apps\front-ecommerce\components\order\orderInfos\shippingAddress\OrderInfoShippingAddressMain.vue`

## Summary
This Vue component manages and displays shipping address information for both regular orders and subscription orders in an e-commerce application. It intelligently determines which order data to display (preferring a subscription's draft order over a regular order), and provides functionality to toggle between viewing the subscription's address versus the next draft order's address when dealing with subscription-based purchases.

## Function Details

### `changeAddressDisplayed`

- **Parameters**: `$event: boolean`

### `currentOrder`

- **Parameters**: `computed((`


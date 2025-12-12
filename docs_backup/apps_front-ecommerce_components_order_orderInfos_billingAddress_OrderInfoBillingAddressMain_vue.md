# OrderInfoBillingAddressMain.vue

**Path**: `apps\front-ecommerce\components\order\orderInfos\billingAddress\OrderInfoBillingAddressMain.vue`

## Summary
This Vue component displays and manages billing address information for either orders or subscriptions in an e-commerce application. It dynamically determines which billing address to show based on whether an order or subscription is provided as a prop, and conditionally enables editing functionality for subscriptions when the `isSubscriptionEditable` flag is true. The component handles loading states with visual feedback (grayscale effect) and supports reloading the billing section after successful updates.

## Function Details

### `billingAddress`

- **Parameters**: `computed((`


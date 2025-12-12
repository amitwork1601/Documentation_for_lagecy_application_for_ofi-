# SubscriptionCardCollapse.vue

**Path**: `apps\front-ecommerce\components\shared\SubscriptionCardCollapse.vue`

## Summary
This Vue component displays a collapsible subscription card in an e-commerce application that shows subscription details including status, delivery information, and management options. It handles both mobile and desktop layouts, displaying subscription status tags, next delivery dates, and conditional settings based on whether the subscription is editable (draft mode) and screen size. The component integrates with a cart store to fetch subscription frequencies and provides event emissions for actions like editing delivery intervals, requesting urgent dispatch, and managing next deliveries.

## Function Details

### `subscriptionUsed`

- **Parameters**: `computed((`


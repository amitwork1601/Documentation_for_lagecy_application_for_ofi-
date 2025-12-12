# OrderInfoExclusiveProductMain.vue

**Path**: `apps\front-ecommerce\components\order\orderInfos\upsell\OrderInfoExclusiveProductMain.vue`

## Summary
This Vue component manages the display and tracking of upsell products for subscription orders in an e-commerce application. It fetches available upsell product variants from the backend (excluding those already in the draft order), and handles tracking events when customers add or remove subscription upsells from their order. The component integrates with the customer store for authentication and provides real-time reloading capabilities when subscription items are modified.

## Function Details

### `getUpSellVariants`



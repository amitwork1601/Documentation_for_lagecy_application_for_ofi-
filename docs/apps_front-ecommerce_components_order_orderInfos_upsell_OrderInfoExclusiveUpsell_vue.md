# OrderInfoExclusiveUpsell.vue

**Path**: `apps\front-ecommerce\components\order\orderInfos\upsell\OrderInfoExclusiveUpsell.vue`

## Summary
This Vue component handles the display and addition of exclusive upsell products to a customer's subscription order. It manages the process of adding upsell items to the next draft order by calling the subscription API, tracking the loading state, and emitting success events with the added item details. The component is designed for e-commerce subscription management, allowing customers to add time-limited promotional products to their upcoming subscription deliveries.

## Function Details

### `onSubmitUpsell`

- **Parameters**: `item: IVariant`


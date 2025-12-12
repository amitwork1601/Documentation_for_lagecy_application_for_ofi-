# OrderInfoProductsList.vue

**Path**: `apps\front-ecommerce\components\order\orderInfos\productsList\OrderInfoProductsList.vue`

## Summary
This Vue component displays and manages the products list within an order or subscription details view. It allows users to view order items and free products, and for subscriptions specifically, enables editing functionality to update item quantities or remove items from the next draft order. The component integrates with a subscription management system to persist changes and emits success events to notify parent components of updates.

## Function Details

### `updateQuantityOrRemoveItem`

- **Parameters**: `orderItem: IOrderItem, quantity = 0`


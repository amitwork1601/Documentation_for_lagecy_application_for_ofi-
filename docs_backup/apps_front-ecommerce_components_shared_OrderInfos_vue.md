# OrderInfos.vue

**Path**: `apps\front-ecommerce\components\shared\OrderInfos.vue`

## Summary
This Vue component manages editable order information sections in an e-commerce checkout flow. It handles toggling between view and edit modes for order detail blocks, synchronizing the edit state with URL query parameters, and automatically scrolling to and opening specific sections when accessed via URL (e.g., `?edit=shipping-address`). The component also implements a locking mechanism to disable interactions when needed and emits change events to notify parent components of edit mode transitions.

## Function Details

### `addBlockQuery`


### `isCurrentOrderInfoOpened`

- **Parameters**: `computed((`


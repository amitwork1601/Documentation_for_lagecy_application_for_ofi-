# trackingEventOnPurchase.ts

**Path**: `apps\front-ecommerce\types\tracking\trackingEventOnPurchase.ts`

## Summary
This class extends `TrackingEvent` to handle purchase tracking events for e-commerce orders, specifically for Google Tag Manager (GTM) integration. It transforms order data (including items, variants, subscriptions, and pricing) into a standardized GTM data format by mapping order items to GTM item objects with properties like item_id, item_name, price, quantity, and subscription status, while also determining order type from classification metadata.

## Classes
- `TrackingEventOnPurchase`

## Function Details

### `itemsListGTM`

- **Parameters**: `computed((`

### `getOrderType`

- **Parameters**: `computed((`

### `isSubOrderGTM`

- **Parameters**: `computed((`

### `getCouponGTM`

- **Parameters**: `computed((`


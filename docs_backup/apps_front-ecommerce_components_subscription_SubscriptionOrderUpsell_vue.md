# SubscriptionOrderUpsell.vue

**Path**: `apps\front-ecommerce\components\subscription\SubscriptionOrderUpsell.vue`

## Summary
This Vue component handles upselling products within a subscription order context by allowing users to add recommended products (upsells/cross-sells) to their next draft subscription order. It manages the state of adding products, integrates tracking events for subscription upsells, and communicates with the subscription order API to update the draft order with the selected variant while maintaining proper analytics tracking through `TrackingEventOnAddAbo`.

## Function Details

### `trackingUpsellSubscriptionOrder`

- **Parameters**: `item: TTrackingSyliusProductInput`

### `addToNextDraftOrder`



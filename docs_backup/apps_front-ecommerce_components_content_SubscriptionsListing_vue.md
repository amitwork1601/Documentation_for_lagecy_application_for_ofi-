# SubscriptionsListing.vue

**Path**: `apps\front-ecommerce\components\content\SubscriptionsListing.vue`

## Summary
This Vue component displays and organizes a user's e-commerce subscriptions by categorizing them into different states (paused, alerts, in-progress, stopped) based on business rules like payment expiration and subscription status. The main functionality sorts subscriptions by priority (paused first, then alerts for expiring payments, active subscriptions, and finally stopped ones) and by relevant dates (next shipping or stop date) to present them in a meaningful order for the user interface.

## Function Details

### `splitSubscriptionsByStatus`

- **Parameters**: `subscriptionsByStatus: ISubscription[]`

### `getSubscriptionSortInfo`

- **Parameters**: `subscription: ISubscription`

### `isSubscriptionEditable`

- **Parameters**: `subscription: ISubscription`

### `subscriptions`

- **Parameters**: `computed((`


# AccountCards.vue

**Path**: `apps\front-ecommerce\components\content\AccountCards.vue`

## Summary
This Vue component displays personalized account cards on an e-commerce customer account page, showing the user's most recent subscription, last order, and last draft order. It fetches customer order and subscription data, filters them based on their states (delivered, active subscriptions, draft orders), and presents them alongside a guide entrance component with help resources for the account section.

## Function Details

### `isNotValidPeriod`

- **Parameters**: `order: IOrder | null = null`

### `getClosestSubscription`

- **Parameters**: `acc: ISubscription, sub: ISubscription`

### `getOrderCardsData`



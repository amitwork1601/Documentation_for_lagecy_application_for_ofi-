# [subscription].vue

**Path**: `apps\front-ecommerce\pages\account\subscriptions\[subscription].vue`

## Summary
This Vue component serves as the subscription detail page for authenticated e-commerce customers, allowing them to view and manage a specific subscription identified by the URL parameter. It handles subscription state management (including draft orders, active/stopped states, and edit restrictions based on dates), provides tabbed navigation for subscription details, and enables customer interactions such as requesting urgent dispatch or contacting support about the subscription. The component integrates with CMS content, customer subscription data, and tracking events to deliver a comprehensive subscription management interface.

## Function Details

### `fetchSubscriptionAndDraftOrder`


### `reload`

- **Parameters**: `elementId?: string, callback?: (`

### `trackingOnSelectSubscriptionPageTab`

- **Parameters**: `label: string`

### `openUrgentDispatchModal`


### `onSelectSubscriptionTab`

- **Parameters**: `selectedTab: TActiveTab`


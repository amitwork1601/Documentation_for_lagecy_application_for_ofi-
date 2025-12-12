# [order].vue

**Path**: `apps\front-ecommerce\pages\account\subscriptions\history-[subscription]\[order].vue`

## Summary
This Vue page displays the detailed history of a specific order within a subscription in an e-commerce application. It fetches both subscription and order data using their respective IDs from the route parameters, formats the order date for display, and implements authentication middleware to ensure only logged-in users can access this account section. The page also sets up CMS page context, tracking events, and metadata for the order details view.

## Function Details

### `orderDateToDisplay`

- **Parameters**: `computed((`


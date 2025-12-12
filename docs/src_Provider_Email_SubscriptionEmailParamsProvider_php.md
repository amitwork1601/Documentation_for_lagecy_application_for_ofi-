# SubscriptionEmailParamsProvider.php

**Path**: `src\Provider\Email\SubscriptionEmailParamsProvider.php`

## Summary
The `SubscriptionEmailParamsProvider` class prepares data parameters for subscription-related email notifications. It extracts and formats subscription details (customer info, payment card expiration, shipping dates, delivery frequency, products, and up-sells) from a subscription's draft order, processing the order through an `OrderProcessorInterface` and formatting monetary values for email template rendering.

## Classes
- `SubscriptionEmailParamsProvider`

## Function Details

### `getParams`

- **Parameters**: `Subscription $subscription`

### `getProductsParams`

- **Parameters**: `SubscriptionOrder $draftOrder`

### `getUpSellsParams`

- **Parameters**: `SubscriptionOrder $draftOrder`


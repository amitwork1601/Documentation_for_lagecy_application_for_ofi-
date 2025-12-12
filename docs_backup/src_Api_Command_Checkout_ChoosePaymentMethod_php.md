# ChoosePaymentMethod.php

**Path**: `src\Api\Command\Checkout\ChoosePaymentMethod.php`

## Summary
This is a command class for the checkout process that encapsulates the data required to assign a payment method to a specific payment in an order. It stores both core payment selection data (order token, payment ID, and payment method) as well as tracking-related information (Google Click ID, session ID, user agent, and consent storage preferences) for analytics and advertising purposes during the payment method selection step of checkout.

## Classes
- `ChoosePaymentMethod`

## Function Details

### `getGclid`


### `getGSessionId`


### `getCustomerUserAgent`


### `getAdStorage`


### `getAnalyticsStorage`



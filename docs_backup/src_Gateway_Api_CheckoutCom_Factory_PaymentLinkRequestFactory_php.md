# PaymentLinkRequestFactory.php

**Path**: `src\Gateway\Api\CheckoutCom\Factory\PaymentLinkRequestFactory.php`

## Summary
This factory class creates `PaymentLinkRequest` objects for Checkout.com payment gateway integration by transforming Sylius order data into the format required by Checkout.com's API. It populates the payment request with order details (amount, currency, customer info, addresses, items), adds metadata for tracking, generates a return URL for post-payment redirects, and includes shipping charges as a separate product line item, while handling localhost URL detection to prevent local development URLs from being sent to the payment gateway.

## Classes
- `PaymentLinkRequestFactory`

## Function Details

### `create`

- **Parameters**: `Order $order`


# SubscriptionAwareResolver.php

**Path**: `src\Payment\Resolver\SubscriptionAwareResolver.php`

## Summary
The `SubscriptionAwareResolver` class determines available payment methods for orders, with special handling for subscription orders and admin users. It retrieves enabled payment methods from the repository based on the current channel and user context, and specifically excludes manual payment methods when admin users are processing subscription orders (since subscriptions require automated recurring payments). This resolver ensures that only appropriate payment gateways are offered depending on the order type and user role.

## Classes
- `SubscriptionAwareResolver`

## Function Details

### `getSupportedMethods`

- **Parameters**: `BasePaymentInterface $subject`

### `supports`

- **Parameters**: `BasePaymentInterface $subject`


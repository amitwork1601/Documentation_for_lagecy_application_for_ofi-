# PaymentMethodsOrderResolver.php

**Path**: `src\Payment\Resolver\PaymentMethodsOrderResolver.php`

## Summary
This resolver determines which payment methods are available for regular (non-subscription) orders in a Sylius e-commerce system. It returns different sets of enabled payment methods based on whether the current user is an admin or a regular shop user, and only supports orders that are not subscription-based and don't contain any subscribed items.

## Classes
- `PaymentMethodsOrderResolver`

## Function Details

### `getSupportedMethods`

- **Parameters**: `BasePaymentInterface $subject`

### `supports`

- **Parameters**: `BasePaymentInterface $subject`


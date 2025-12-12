# PayPalDefaultPaymentMethodResolver.php

**Path**: `plugins\PayPalPlugin\src\Resolver\PayPalDefaultPaymentMethodResolver.php`

## Summary
This class resolves the default payment method for Sylius orders, with a special prioritization for PayPal payment methods. It acts as a decorator around the standard payment method resolver, checking if a PayPal payment method is available and enabled for the order's channel before falling back to the default resolution logic.

## Classes
- `PayPalDefaultPaymentMethodResolver`

## Function Details

### `getDefaultPaymentMethod`

- **Parameters**: `BasePaymentInterface $subject, string $prioritisedPayment = 'sylius.pay_pal'`

### `getFirstPrioritisedPaymentForChannel`

- **Parameters**: `ChannelInterface $channel, string $prioritisedPayment`


# PaymentMethodChargesResolver.php

**Path**: `src\Resolver\PaymentMethodChargesResolver.php`

## Summary
This resolver determines the applicable payment method charge for a shopping cart based on the cart's total amount and channel configuration. It iterates through configured payment method charges, finds one whose range matches the cart total, validates it's enabled for the specific channel, and returns the matching charge or null if none qualify. The class enables dynamic payment fees based on order value ranges and per-channel settings in an e-commerce system built on Sylius framework.

## Classes
- `PaymentMethodChargesResolver`

## Function Details

### `__construct`


### `getChargeByCart`

- **Parameters**: `OrderInterface $cart, PaymentMethod $method, ?ChannelInterface $channel = null`


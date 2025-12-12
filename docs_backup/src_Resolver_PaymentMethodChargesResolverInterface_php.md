# PaymentMethodChargesResolverInterface.php

**Path**: `src\Resolver\PaymentMethodChargesResolverInterface.php`

## Summary
This interface defines a contract for resolving payment method charges in an e-commerce context. It provides a method to determine the applicable charges/fees for a specific payment method based on a shopping cart (order), payment method, and optional sales channel. This resolver enables dynamic calculation of payment processing fees that may vary depending on the order context and channel configuration.

## Function Details

### `getChargeByCart`

- **Parameters**: `OrderInterface $cart, PaymentMethod $method, ?ChannelInterface $channel = null`


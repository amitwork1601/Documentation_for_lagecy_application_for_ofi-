# PayPalDefaultPaymentMethodResolverSpec.php

**Path**: `plugins\PayPalPlugin\spec\Resolver\PayPalDefaultPaymentMethodResolverSpec.php`

## Summary
This is a PHPSpec test specification for a PayPal payment method resolver in the Sylius e-commerce platform. It tests a decorator class that prioritizes PayPal payment methods when resolving the default payment method for an order's channel, falling back to a decorated resolver when needed. The spec verifies that the resolver correctly identifies and returns PayPal gateway configurations over other payment methods based on factory names and gateway configurations.

## Classes
- `PayPalDefaultPaymentMethodResolverSpec`

## Function Details

### `let`

- **Parameters**: `DefaultPaymentMethodResolverInterface $decoratedDefaultPaymentMethodResolver, PaymentMethodRepositoryInterface $paymentMethodRepository`

### `it_implements_default_payment_method_resolver_interface`



# PayPalPrioritisingPaymentMethodsResolverSpec.php

**Path**: `plugins\PayPalPlugin\spec\Resolver\PayPalPrioritisingPaymentMethodsResolverSpec.php`

## Summary
This is a PHPSpec test file for a payment methods resolver that prioritizes PayPal payment methods in a Sylius e-commerce system. The resolver decorates an existing payment methods resolver and reorders the available payment methods list to place a specified payment gateway (in this case 'prioritised', representing PayPal) at the top of the options. This ensures PayPal appears as the first payment option when customers checkout, even if other payment methods are configured.

## Classes
- `PayPalPrioritisingPaymentMethodsResolverSpec`

## Function Details

### `let`

- **Parameters**: `PaymentMethodsResolverInterface $paymentMethodsResolver`

### `it_implements_payment_methods_resolver_interface`



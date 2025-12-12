# PayPalPrioritisingPaymentMethodsResolver.php

**Path**: `plugins\PayPalPlugin\src\Resolver\PayPalPrioritisingPaymentMethodsResolver.php`

## Summary
This class is a decorator for the payment methods resolver in the Sylius PayPal plugin that prioritizes PayPal payment methods in the list of available payment options. It wraps an existing payment methods resolver and reorders the results so that payment methods matching a specified factory name (typically PayPal) appear first in the list, ensuring PayPal is prominently displayed as a payment option to customers during checkout.

## Classes
- `PayPalPrioritisingPaymentMethodsResolver`

## Function Details

### `__construct`

- **Parameters**: `PaymentMethodsResolverInterface $decoratedPaymentMethodsResolver, string $firstPaymentMethodFactoryName`

### `getSupportedMethods`

- **Parameters**: `BasePaymentInterface $payment`

### `supports`

- **Parameters**: `BasePaymentInterface $payment`

### `sortPayments`

- **Parameters**: `array $payments, string $firstPaymentFactoryName`
- **Description**: @return PaymentMethodInterface[]
/


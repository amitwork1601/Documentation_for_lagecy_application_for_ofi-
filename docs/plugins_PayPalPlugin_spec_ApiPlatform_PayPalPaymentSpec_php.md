# PayPalPaymentSpec.php

**Path**: `plugins\PayPalPlugin\spec\ApiPlatform\PayPalPaymentSpec.php`

## Summary
This is a PHPSpec test specification file for the PayPalPayment class in the Sylius PayPal plugin. It tests the functionality of integrating PayPal as a payment method, specifically verifying that it correctly identifies PayPal gateway configurations (by factory name 'sylius.pay_pal') and provides the proper PayPal configuration including client credentials and routing for payment processing.

## Classes
- `PayPalPaymentSpec`

## Function Details

### `let`

- **Parameters**: `RouterInterface $router, AvailableCountriesProviderInterface $availableCountriesProvider`


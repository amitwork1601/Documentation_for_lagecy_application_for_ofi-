# PayPalPayment.php

**Path**: `plugins\PayPalPlugin\src\ApiPlatform\PayPalPayment.php`

## Summary
This class serves as an API Platform integration handler for PayPal payments within the Sylius e-commerce platform. It provides functionality to identify PayPal payment methods (via the `supports()` method checking for 'sylius.pay_pal' gateway) and prepares payment configuration data for orders, likely including routing URLs and available country settings for PayPal checkout flows.

## Classes
- `PayPalPayment`

## Function Details

### `__construct`

- **Parameters**: `RouterInterface $router, AvailableCountriesProviderInterface $availableCountriesProvider`

### `supports`

- **Parameters**: `PaymentMethodInterface $paymentMethod`

### `provideConfiguration`

- **Parameters**: `PaymentInterface $payment`


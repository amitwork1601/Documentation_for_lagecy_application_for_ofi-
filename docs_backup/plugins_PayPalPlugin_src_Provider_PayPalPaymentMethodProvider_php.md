# PayPalPaymentMethodProvider.php

**Path**: `plugins\PayPalPlugin\src\Provider\PayPalPaymentMethodProvider.php`

## Summary
This class provides a service to locate and retrieve the PayPal payment method from the system's configured payment methods. It searches through all available payment methods in the repository, identifies the one configured with the 'sylius.pay_pal' gateway factory, and returns it, throwing an exception if no PayPal payment method is found.

## Classes
- `PayPalPaymentMethodProvider`

## Function Details

### `__construct`

- **Parameters**: `PaymentMethodRepositoryInterface $paymentMethodRepository`

### `provide`



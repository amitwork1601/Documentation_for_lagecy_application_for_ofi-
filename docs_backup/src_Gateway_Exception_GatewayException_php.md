# GatewayException.php

**Path**: `src\Gateway\Exception\GatewayException.php`

## Summary
This class defines a custom exception for payment gateway errors in a Sylius-based e-commerce application. It provides a named constructor `invalidPaymentMethod()` that generates a standardized error message when a payment method's gateway configuration is incompatible or invalid, using the payment method's factory name to provide specific context about which gateway failed.

## Classes
- `GatewayException`

## Function Details

### `invalidPaymentMethod`

- **Parameters**: `PaymentMethodInterface $paymentMethod`


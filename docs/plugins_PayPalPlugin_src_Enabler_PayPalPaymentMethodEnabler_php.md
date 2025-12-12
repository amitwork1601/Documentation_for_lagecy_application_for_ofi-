# PayPalPaymentMethodEnabler.php

**Path**: `plugins\PayPalPlugin\src\Enabler\PayPalPaymentMethodEnabler.php`

## Summary
This class is responsible for enabling PayPal payment methods in a Sylius e-commerce system by verifying that merchant permissions have been granted and registering webhooks. It checks with PayPal's API that the seller has granted necessary permissions for the payment method, and if successful, registers the seller's webhook and enables the payment method in the system. The class throws a `PaymentMethodCouldNotBeEnabledException` if the merchant hasn't granted the required permissions.

## Classes
- `PayPalPaymentMethodEnabler`

## Function Details

### `enable`

- **Parameters**: `PaymentMethodInterface $paymentMethod`


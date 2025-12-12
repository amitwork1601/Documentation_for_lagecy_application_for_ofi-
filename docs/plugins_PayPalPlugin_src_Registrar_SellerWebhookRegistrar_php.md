# SellerWebhookRegistrar.php

**Path**: `plugins\PayPalPlugin\src\Registrar\SellerWebhookRegistrar.php`

## Summary
The `SellerWebhookRegistrar` class is responsible for registering PayPal webhooks for seller payment methods in the Sylius e-commerce platform. It authenticates with PayPal using client credentials, generates absolute webhook URLs based on configured routes, and registers these webhooks through the PayPal API to enable real-time payment event notifications. The class handles webhook registration errors including duplicate registrations and invalid webhook URLs.

## Classes
- `SellerWebhookRegistrar`

## Function Details

### `register`

- **Parameters**: `PaymentMethodInterface $paymentMethod`


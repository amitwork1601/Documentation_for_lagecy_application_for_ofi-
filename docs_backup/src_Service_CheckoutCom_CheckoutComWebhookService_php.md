# CheckoutComWebhookService.php

**Path**: `src\Service\CheckoutCom\CheckoutComWebhookService.php`

## Summary
The `CheckoutComWebhookService` class validates incoming webhooks from Checkout.com payment gateway to ensure their authenticity and prevent fraudulent requests. It verifies webhooks by checking both an authorization header key against stored configuration and validating an HMAC-SHA256 signature of the webhook payload using a secret key, throwing exceptions if either validation fails.

## Classes
- `CheckoutComWebhookService`


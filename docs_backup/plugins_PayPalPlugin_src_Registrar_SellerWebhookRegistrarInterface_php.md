# SellerWebhookRegistrarInterface.php

**Path**: `plugins\PayPalPlugin\src\Registrar\SellerWebhookRegistrarInterface.php`

## Summary
This interface defines a contract for registering PayPal seller webhooks with a specific payment method in the Sylius e-commerce platform. It provides a single method to configure webhook endpoints that allow PayPal to send event notifications (like payment confirmations or refunds) back to the merchant's system, throwing an exception if the webhook URL validation fails.

## Function Details

### `register`

- **Parameters**: `PaymentMethodInterface $paymentMethod`
- **Description**: @throws PayPalWebhookUrlNotValidException */


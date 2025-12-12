# WebhookApiInterface.php

**Path**: `plugins\PayPalPlugin\src\Api\WebhookApiInterface.php`

## Summary
This interface defines the contract for registering PayPal webhooks in the Sylius PayPal Plugin. It specifies a single method to register a webhook endpoint with PayPal's API, allowing the application to receive real-time notifications about PayPal events (such as payment completions, refunds, or disputes) by providing an authentication token, webhook URL, and the types of events to subscribe to.

## Function Details

### `register`

- **Parameters**: `string $token, string $webhookUrl, array $eventTypes`


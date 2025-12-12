# WebhookApi.php

**Path**: `plugins\PayPalPlugin\src\Api\WebhookApi.php`

## Summary
The `WebhookApi` class provides a service for registering PayPal webhooks in the Sylius e-commerce platform. It sends a POST request to PayPal's API to register a webhook URL with specified event types, automatically ensuring the webhook URL uses HTTPS protocol (converting HTTP if necessary) and returns the parsed JSON response from PayPal containing the webhook registration details.

## Classes
- `WebhookApi`

## Function Details

### `__construct`

- **Parameters**: `ClientInterface $client, string $baseUrl`

### `register`

- **Parameters**: `string $token, string $webhookUrl, array $eventTypes`


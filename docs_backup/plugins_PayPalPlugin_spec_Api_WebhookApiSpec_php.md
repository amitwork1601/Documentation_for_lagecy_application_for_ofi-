# WebhookApiSpec.php

**Path**: `plugins\PayPalPlugin\spec\Api\WebhookApiSpec.php`

## Summary
This is a PHPSpec specification file that tests the `WebhookApi` class for the Sylius PayPal Plugin. It verifies that the API correctly registers PayPal webhooks by making POST requests to PayPal's webhook registration endpoint with proper authentication tokens, webhook URLs, and event type configurations (specifically for `PAYMENT.CAPTURE.REFUNDED` events). The tests ensure the API handles both HTTPS and non-HTTPS webhook URLs and properly parses the JSON response from PayPal's API.

## Classes
- `WebhookApiSpec`

## Function Details

### `let`

- **Parameters**: `ClientInterface $client`


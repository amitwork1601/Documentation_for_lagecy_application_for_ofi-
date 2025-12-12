# AbstractWebhookAction.php

**Path**: `plugins\PayPalPlugin\src\Controller\Webhook\AbstractWebhookAction.php`

## Summary
This abstract base class provides a standardized framework for handling PayPal webhook events in a Sylius e-commerce plugin. It validates incoming webhook requests, extracts PayPal payment data from the webhook payload, and delegates order processing to a WebhookService while handling various exceptions (request failures, data validation errors, state machine transitions) with appropriate logging and HTTP responses.

## Classes
- `AbstractWebhookAction`

## Function Details

### `__invoke`

- **Parameters**: `Request $request`

### `supports`

- **Parameters**: `Request $request`

### `getPayPalPaymentUrl`

- **Parameters**: `Request $request`
- **Description**: @throws PayPalWrongDataException
/

### `getRelWebhookDataProvider`



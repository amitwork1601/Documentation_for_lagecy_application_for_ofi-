# PaymentCaptureDeniedAction.php

**Path**: `plugins\PayPalPlugin\src\Controller\Webhook\PaymentCaptureDeniedAction.php`

## Summary
This class handles PayPal webhook notifications specifically for denied payment captures (PAYMENT.CAPTURE.DENIED events). It extends AbstractWebhookAction to process incoming webhook requests from PayPal when a payment capture is rejected or denied, logging the event and coordinating the appropriate response through the webhook service infrastructure.

## Classes
- `PaymentCaptureDeniedAction`

## Function Details

### `__invoke`

- **Parameters**: `Request $request`


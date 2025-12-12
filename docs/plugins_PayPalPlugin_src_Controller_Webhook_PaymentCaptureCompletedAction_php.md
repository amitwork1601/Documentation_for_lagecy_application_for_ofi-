# PaymentCaptureCompletedAction.php

**Path**: `plugins\PayPalPlugin\src\Controller\Webhook\PaymentCaptureCompletedAction.php`

## Summary
This controller handles PayPal webhook events for completed payment captures (PAYMENT.CAPTURE.COMPLETED). It extends AbstractWebhookAction to process incoming webhook notifications from PayPal when a payment capture transaction is successfully completed, logging the event and delegating the actual processing to the WebhookService and PayPalWebhookDataProvider.

## Classes
- `PaymentCaptureCompletedAction`

## Function Details

### `__invoke`

- **Parameters**: `Request $request`


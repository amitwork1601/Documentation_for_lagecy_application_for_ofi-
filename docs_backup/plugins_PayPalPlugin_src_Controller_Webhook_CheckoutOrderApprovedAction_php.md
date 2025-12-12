# CheckoutOrderApprovedAction.php

**Path**: `plugins\PayPalPlugin\src\Controller\Webhook\CheckoutOrderApprovedAction.php`

## Summary
This class handles PayPal webhook events for the 'CHECKOUT.ORDER.APPROVED' event type, which is triggered when a customer approves a PayPal order during checkout. It extends AbstractWebhookAction to process and log approved order notifications from PayPal, using the webhook service and data provider to validate and handle the incoming webhook data. The class serves as a specific webhook endpoint handler in the Sylius PayPal plugin integration.

## Classes
- `CheckoutOrderApprovedAction`

## Function Details

### `__invoke`

- **Parameters**: `Request $request`

### `getRelWebhookDataProvider`



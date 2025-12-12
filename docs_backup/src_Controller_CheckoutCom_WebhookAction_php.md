# WebhookAction.php

**Path**: `src\Controller\CheckoutCom\WebhookAction.php`

## Summary
This class handles webhook callbacks from Checkout.com payment gateway for processing payment status updates. It validates incoming webhook requests, uses locking mechanisms to prevent race conditions on order processing, and delegates the actual payment state transitions to the CheckoutComWebhookService. The action serves as the entry point controller for asynchronous payment notifications, ensuring thread-safe order updates when payment events (like authorizations or captures) are received from Checkout.com.

## Classes
- `WebhookAction`

## Function Details

### `__invoke`

- **Parameters**: `Request $request`

### `supports`

- **Parameters**: `Request $request`


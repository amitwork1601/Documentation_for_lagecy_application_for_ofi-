# WebhookActionInterface.php

**Path**: `plugins\PayPalPlugin\src\Controller\Webhook\WebhookActionInterface.php`

## Summary
This interface defines the contract for PayPal webhook action handlers in the Sylius e-commerce platform. It requires implementing classes to determine if they can handle a specific webhook request (`supports()`) and extract the PayPal payment URL from that request (`getPayPalPaymentUrl()`). This enables a strategy pattern for processing different types of PayPal webhook notifications based on the request content.

## Function Details

### `supports`

- **Parameters**: `Request $request`

### `getPayPalPaymentUrl`

- **Parameters**: `Request $request`


# PayPalWrongWebhookException.php

**Path**: `plugins\PayPalPlugin\src\Exception\PayPalWrongWebhookException.php`

## Summary
This file defines a custom exception class specifically for handling invalid PayPal webhook scenarios in the Sylius PayPal plugin. The exception is thrown when a webhook received from PayPal fails validation, providing a clear error message to indicate that the webhook authenticity check has failed. This is a security measure to ensure that only legitimate PayPal webhook notifications are processed by the system.

## Classes
- `PayPalWrongWebhookException`

## Function Details

### `__construct`



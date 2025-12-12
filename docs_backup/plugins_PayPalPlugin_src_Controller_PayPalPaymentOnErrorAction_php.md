# PayPalPaymentOnErrorAction.php

**Path**: `plugins\PayPalPlugin\src\Controller\PayPalPaymentOnErrorAction.php`

## Summary
This controller handles PayPal payment error scenarios in a Sylius e-commerce integration. When invoked, it logs the error details from the request content, adds a flash message to notify users that something went wrong with their PayPal payment, and returns an empty response to acknowledge the error callback.

## Classes
- `PayPalPaymentOnErrorAction`

## Function Details

### `__construct`

- **Parameters**: `LoggerInterface $logger`

### `__invoke`

- **Parameters**: `Request $request`


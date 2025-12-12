# AuthorizePaymentOrderApi.php

**Path**: `plugins\PayPalPlugin\src\Api\AuthorizePaymentOrderApi.php`

## Summary
This class provides an API wrapper for authorizing PayPal payment orders within the Sylius e-commerce platform. It communicates with PayPal's v2 checkout API by sending POST requests to the authorization endpoint, using an order ID and authentication token to complete the payment authorization process. The class serves as a focused service layer that encapsulates the specific PayPal authorization logic for payment processing.

## Classes
- `AuthorizePaymentOrderApi`

## Function Details

### `__construct`

- **Parameters**: `PayPalClientInterface $client`

### `get`

- **Parameters**: `string $token, string $orderId`


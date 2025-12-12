# CompleteOrderApi.php

**Path**: `plugins\PayPalPlugin\src\Api\CompleteOrderApi.php`

## Summary
The `CompleteOrderApi` class is a PayPal API wrapper that handles the completion/capture of PayPal orders in the Sylius e-commerce platform. It sends POST requests to PayPal's v2 checkout API to capture payment for a given order ID, with optional support for simulating declined payment errors during testing via a mock flag.

## Classes
- `CompleteOrderApi`

## Function Details

### `__construct`

- **Parameters**: `PayPalClientInterface $client`

### `complete`

- **Parameters**: `string $token, string $orderId, ?bool $mockError = false`


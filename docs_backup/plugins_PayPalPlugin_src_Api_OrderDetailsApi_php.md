# OrderDetailsApi.php

**Path**: `plugins\PayPalPlugin\src\Api\OrderDetailsApi.php`

## Summary
This class provides an API wrapper for retrieving PayPal order details from the PayPal v2 checkout API. It acts as a service layer that encapsulates the HTTP client call to fetch order information by order ID using an authentication token. The class exists to abstract PayPal's order details endpoint, making it easier for the Sylius e-commerce platform to query PayPal transaction data during payment processing workflows.

## Classes
- `OrderDetailsApi`

## Function Details

### `__construct`

- **Parameters**: `PayPalClientInterface $client`

### `get`

- **Parameters**: `string $token, string $orderId`


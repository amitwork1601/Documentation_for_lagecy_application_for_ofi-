# CompleteOrderApiSpec.php

**Path**: `plugins\PayPalPlugin\spec\Api\CompleteOrderApiSpec.php`

## Summary
This is a PhpSpec specification file that tests the `CompleteOrderApi` class, which handles the completion of PayPal orders in the Sylius e-commerce platform. The spec verifies that the API correctly calls PayPal's capture endpoint (`v2/checkout/orders/{id}/capture`) with an authorization token to finalize a PayPal payment transaction and return the completion status.

## Classes
- `CompleteOrderApiSpec`

## Function Details

### `let`

- **Parameters**: `PayPalClientInterface $client`

### `it_implements_complete_order_api_interface`



# CreateOrderApiSpec.php

**Path**: `plugins\PayPalPlugin\spec\Api\CreateOrderApiSpec.php`

## Summary
This is a PHPSpec specification file that tests the `CreateOrderApi` class, which is responsible for creating PayPal orders from Sylius payment objects. The spec validates that the API correctly interfaces with PayPal's client to transform e-commerce payment data (including order amounts, currency, shipping addresses, and line items) into PayPal-compatible order creation requests using injected provider services for reference numbers and item data formatting.

## Classes
- `CreateOrderApiSpec`

## Function Details

### `it_implements_create_order_api_interface`



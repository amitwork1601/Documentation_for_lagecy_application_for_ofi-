# CreateOrderApi.php

**Path**: `plugins\PayPalPlugin\src\Api\CreateOrderApi.php`

## Summary
This class implements the PayPal order creation API functionality for the Sylius e-commerce platform. It handles the creation of PayPal orders by communicating with PayPal's API client, transforming Sylius payment and order data into PayPal's expected format (including purchase units, line items, and payment intent like CAPTURE or AUTHORIZE). The class acts as a bridge between Sylius's commerce domain model and PayPal's payment processing system.

## Classes
- `CreateOrderApi`

## Function Details

### `create`

- **Parameters**: `string $token, PaymentInterface $payment, string $referenceId`

### `_getApplicationContext`

- **Parameters**: `array $config, OrderInterface $order`

### `getOrderPromotionTotal`

- **Parameters**: `PaymentInterface $payment, OrderInterface $order, array $payPalItemData`


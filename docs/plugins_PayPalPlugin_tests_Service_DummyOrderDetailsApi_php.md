# DummyOrderDetailsApi.php

**Path**: `plugins\PayPalPlugin\tests\Service\DummyOrderDetailsApi.php`

## Summary
This is a test double (dummy implementation) of the PayPal order details API interface used for testing purposes in the Sylius PayPal plugin. It provides a hardcoded response simulating a completed PayPal order with a capture ID, eliminating the need for actual PayPal API calls during unit/integration tests. The dummy always returns a successful order status with mock payment capture data, allowing tests to run in isolation without external dependencies.

## Classes
- `DummyOrderDetailsApi`

## Function Details

### `get`

- **Parameters**: `string $token, string $orderId`


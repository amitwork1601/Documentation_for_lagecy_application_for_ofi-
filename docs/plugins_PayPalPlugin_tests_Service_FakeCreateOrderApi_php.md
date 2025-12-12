# FakeCreateOrderApi.php

**Path**: `plugins\PayPalPlugin\tests\Service\FakeCreateOrderApi.php`

## Summary
This is a test double (fake implementation) of the PayPal Create Order API that simulates order creation for testing purposes. Instead of making actual API calls to PayPal, it returns a hardcoded response with a mock order ID and "CREATED" status, allowing the PayPal plugin's order creation workflow to be tested in isolation without external dependencies.

## Classes
- `FakeCreateOrderApi`

## Function Details

### `create`

- **Parameters**: `string $token, PaymentInterface $payment, string $referenceId`


# CreateOrderApiInterface.php

**Path**: `plugins\PayPalPlugin\src\Api\CreateOrderApiInterface.php`

## Summary
This interface defines a contract for creating PayPal orders within the Sylius PayPal plugin. It specifies a single method that takes an authentication token, a Sylius payment object, and a reference ID to create a PayPal order and return the resulting order data as an array, serving as an abstraction layer between the Sylius e-commerce platform and PayPal's order creation API.

## Function Details

### `create`

- **Parameters**: `string $token, PaymentInterface $payment, string $referenceId`


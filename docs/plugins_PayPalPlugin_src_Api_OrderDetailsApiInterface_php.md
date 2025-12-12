# OrderDetailsApiInterface.php

**Path**: `plugins\PayPalPlugin\src\Api\OrderDetailsApiInterface.php`

## Summary
This interface defines a contract for retrieving PayPal order details through the PayPal API. It requires implementing classes to provide a `get` method that fetches order information using an authentication token and PayPal order ID, returning the details as an array. This is part of the Sylius PayPal plugin's API integration layer for querying payment order status and information from PayPal's services.

## Function Details

### `get`

- **Parameters**: `string $token, string $orderId`


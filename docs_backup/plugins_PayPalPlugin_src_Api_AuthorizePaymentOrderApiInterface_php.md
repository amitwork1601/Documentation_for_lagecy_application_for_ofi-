# AuthorizePaymentOrderApiInterface.php

**Path**: `plugins\PayPalPlugin\src\Api\AuthorizePaymentOrderApiInterface.php`

## Summary
This interface defines a contract for authorizing PayPal payment orders by retrieving order details from PayPal's API. It specifies a single method that fetches payment order information using an authentication token and PayPal order ID, which is essential for the Sylius e-commerce platform's PayPal payment integration to verify and process authorized payments.

## Function Details

### `get`

- **Parameters**: `string $token, string $orderId`


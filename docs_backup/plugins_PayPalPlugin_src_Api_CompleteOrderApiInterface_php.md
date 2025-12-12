# CompleteOrderApiInterface.php

**Path**: `plugins\PayPalPlugin\src\Api\CompleteOrderApiInterface.php`

## Summary
This interface defines a contract for completing PayPal orders through the PayPal API. It specifies a method to finalize a PayPal transaction by providing an authentication token and order ID, with an optional parameter to simulate error conditions for testing purposes.

## Function Details

### `complete`

- **Parameters**: `string $token, string $orderId, ?bool $mockError = false`


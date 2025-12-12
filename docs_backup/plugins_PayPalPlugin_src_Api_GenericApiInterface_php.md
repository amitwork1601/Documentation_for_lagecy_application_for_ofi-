# GenericApiInterface.php

**Path**: `plugins\PayPalPlugin\src\Api\GenericApiInterface.php`

## Summary
This interface defines a contract for making generic GET requests to the PayPal API. It exists to provide a standardized method for retrieving data from PayPal endpoints by accepting an authentication token and URL, returning the response as an array for further processing within the Sylius PayPal plugin.

## Function Details

### `get`

- **Parameters**: `string $token, string $url`


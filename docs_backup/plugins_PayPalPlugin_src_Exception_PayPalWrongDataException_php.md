# PayPalWrongDataException.php

**Path**: `plugins\PayPalPlugin\src\Exception\PayPalWrongDataException.php`

## Summary
This is a custom exception class for the Sylius PayPal plugin that signals when PayPal response data is missing required order link information. It extends PHP's base Exception class and provides a predefined error message indicating that the PayPal data structure is incomplete or malformed. This exception is used to handle data validation errors during PayPal payment processing when the expected order reference links are not present in the API response.

## Classes
- `PayPalWrongDataException`

## Function Details

### `__construct`



# PayPalApiTimeoutException.php

**Path**: `plugins\PayPalPlugin\src\Exception\PayPalApiTimeoutException.php`

## Summary
This class defines a custom exception specifically for handling timeout scenarios when communicating with the PayPal API within the Sylius PayPal plugin. It extends PHP's base Exception class and provides a predefined error message instructing users to retry their PayPal operation later when API requests exceed timeout limits. This exception allows the application to distinguish PayPal timeout errors from other types of failures for appropriate error handling and user feedback.

## Classes
- `PayPalApiTimeoutException`

## Function Details

### `__construct`



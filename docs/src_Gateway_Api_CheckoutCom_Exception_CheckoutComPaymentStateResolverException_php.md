# CheckoutComPaymentStateResolverException.php

**Path**: `src\Gateway\Api\CheckoutCom\Exception\CheckoutComPaymentStateResolverException.php`

## Summary
This is a custom exception class for handling payment state resolution errors in the Checkout.com payment gateway integration. It provides a static factory method `apiResponseException()` to create exceptions with API-specific error messages and HTTP status codes, enabling consistent error handling when resolving payment states from Checkout.com API responses.

## Classes
- `CheckoutComPaymentStateResolverException`

## Function Details

### `apiResponseException`

- **Parameters**: `string $apiMessage, int $apiHttpCode`


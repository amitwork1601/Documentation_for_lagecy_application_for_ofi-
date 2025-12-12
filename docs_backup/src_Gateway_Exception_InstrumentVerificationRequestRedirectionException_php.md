# InstrumentVerificationRequestRedirectionException.php

**Path**: `src\Gateway\Exception\InstrumentVerificationRequestRedirectionException.php`

## Summary
This exception class is thrown when a payment instrument (e.g., credit card) requires additional verification through a redirect, such as 3D Secure authentication. It extends the base Exception class and stores the verification URL where the user needs to be redirected to complete the payment instrument validation process. This is a common pattern in payment gateway integrations where additional authentication steps are required before processing a transaction.

## Classes
- `InstrumentVerificationRequestRedirectionException`

## Function Details

### `__construct`

- **Parameters**: `string $url, $message = '', $code = 0, ?\Throwable $previous = null`

### `getUrl`



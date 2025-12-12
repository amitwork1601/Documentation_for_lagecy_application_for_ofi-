# AsyncPaymentException.php

**Path**: `src\Gateway\Exception\AsyncPaymentException.php`

## Summary
This exception class handles errors specific to asynchronous payment processing in the payment gateway. It provides two factory methods: one for unprocessable payment orders (returning HTTP 422) and another for propagating API response errors with their original HTTP status codes and messages from external payment services.

## Classes
- `AsyncPaymentException`

## Function Details

### `unProcessablePayment`


### `apiResponseException`

- **Parameters**: `string $apiMessage, int $apiHttpCode`


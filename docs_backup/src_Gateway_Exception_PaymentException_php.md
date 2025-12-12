# PaymentException.php

**Path**: `src\Gateway\Exception\PaymentException.php`

## Summary
This exception class handles payment-related errors in a payment gateway system. It provides static factory methods to create specific exception instances for various payment operations including debits, payment requests, payment links, alias tokens, and payment detail retrieval, with contextual error messages for each failure scenario.

## Classes
- `PaymentException`

## Function Details

### `debitPaymentException`

- **Parameters**: `int $orderId`

### `requestPaymentException`

- **Parameters**: `string $message`

### `requestPaymentLinkException`

- **Parameters**: `string $message`

### `requestAliasTokenException`

- **Parameters**: `string $message`

### `retrievePaymentDetailsException`

- **Parameters**: `string $message`


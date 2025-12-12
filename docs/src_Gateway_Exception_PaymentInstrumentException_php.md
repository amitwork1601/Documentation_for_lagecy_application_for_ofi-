# PaymentInstrumentException.php

**Path**: `src\Gateway\Exception\PaymentInstrumentException.php`

## Summary
This exception class handles errors related to payment instrument operations in a payment gateway system. It provides static factory methods to create specific exceptions for payment instrument failures, including invalid payment method updates, alias token verification errors, missing recurrent payment tokens, and missing card expiration dates. The class serves as a centralized way to generate meaningful error messages for payment instrument-related failures during gateway transactions.

## Classes
- `PaymentInstrumentException`

## Function Details

### `invalidUpdatePaymentMethod`

- **Parameters**: `PaymentMethod $paymentMethod`

### `updateHasFailed`


### `verifyAliasTokenException`

- **Parameters**: `string $message`

### `recurentPaymentTokenNotFound`


### `cardExpirationDateNotFound`



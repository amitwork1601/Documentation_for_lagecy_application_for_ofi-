# RecurrentPaymentTokenNotFoundException.php

**Path**: `src\Gateway\Exception\RecurrentPaymentTokenNotFoundException.php`

## Summary
This exception class is thrown when a stored recurrent (recurring) payment token cannot be located in the payment gateway system. It extends `PaymentInstrumentException` and provides a specific error case for handling missing tokenized payment credentials that would be used for subscription or repeat billing scenarios. The class serves as a domain-specific exception to distinguish token retrieval failures from other payment instrument errors.

## Classes
- `RecurrentPaymentTokenNotFoundException`

## Function Details

### `__construct`

- **Parameters**: `string $message = 'The recurrent payment token can\'t be found', int $code = 0, ?\Throwable $previous = null`


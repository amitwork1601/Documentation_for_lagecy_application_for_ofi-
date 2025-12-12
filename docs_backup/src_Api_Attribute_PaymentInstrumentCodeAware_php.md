# PaymentInstrumentCodeAware.php

**Path**: `src\Api\Attribute\PaymentInstrumentCodeAware.php`

## Summary
This PHP attribute marks API classes that require a payment instrument code parameter during construction. It provides metadata to specify which constructor argument should receive the payment instrument code, defaulting to 'paymentInstrumentCode', likely used by a dependency injection system or factory to automatically inject payment method identifiers into API service classes.

## Classes
- `PaymentInstrumentCodeAware`

## Function Details

### `__construct`

- **Parameters**: `public string $constructorArgumentName = self::DEFAULT_ARGUMENT_NAME`


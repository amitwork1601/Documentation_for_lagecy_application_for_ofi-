# PaymentInstrumentApi.php

**Path**: `src\Gateway\Api\Payzen\PaymentInstrumentApi.php`

## Summary
The `PaymentInstrumentApi` class is a Payzen payment gateway client specifically designed to manage payment instruments (stored payment methods). Its main functionality is to verify payment tokens by calling Payzen's Token/Get API endpoint, validating that a stored payment method token is valid and retrieving its associated details, throwing a `PaymentInstrumentException` if verification fails or the token is invalid.

## Classes
- `PaymentInstrumentApi`

## Function Details

### `verifyToken`

- **Parameters**: `string $token`
- **Description**: @throws PaymentInstrumentException
/


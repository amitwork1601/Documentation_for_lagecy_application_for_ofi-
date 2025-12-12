# AwaitingPaymentMethodCode.php

**Path**: `src\Enum\AwaitingPaymentMethodCode.php`

## Summary
This class implements an enumeration pattern for payment methods that require awaiting payment confirmation (check, bank wire, and cash on delivery). It uses the singleton pattern with lazy initialization to ensure only one instance exists for each payment method type, providing type-safe access to payment method codes while preventing invalid values through runtime validation.

## Classes
- `AwaitingPaymentMethodCode`

## Function Details

### `__construct`

- **Parameters**: `string $code`

### `getCode`


### `CHECK`


### `BANKWIRE`


### `CASH_ON_DELIVERY`



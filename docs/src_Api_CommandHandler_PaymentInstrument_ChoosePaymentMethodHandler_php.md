# ChoosePaymentMethodHandler.php

**Path**: `src\Api\CommandHandler\PaymentInstrument\ChoosePaymentMethodHandler.php`

## Summary
This handler processes a command to select a payment method for a customer's payment instrument. It retrieves the payment instrument by code, associates it with the chosen payment method, fetches the corresponding payment gateway, and returns the gateway's public configuration needed for payment processing (handling any gateway errors gracefully by returning empty configuration).

## Classes
- `ChoosePaymentMethodHandler`

## Function Details

### `__invoke`

- **Parameters**: `ChoosePaymentMethod $command`


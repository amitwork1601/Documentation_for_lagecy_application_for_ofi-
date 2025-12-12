# InstrumentCardGatewayInterface.php

**Path**: `src\Gateway\Interface\PaymentMethod\InstrumentCardGatewayInterface.php`

## Summary
This interface defines the contract for payment gateways that handle credit/card-based payment instruments. It extends the base `InstrumentGatewayInterface` and adds two card-specific methods: one to retrieve a card's representation (likely masked number, brand, etc.) from a stored payment instrument, and another to parse and format expiration date data from raw payment data into a standardized DateTime object.

## Function Details

### `getCardRepresentation`

- **Parameters**: `PaymentInstrument $paymentInstrument`

### `formatExpirationDateForPaymentInstrument`

- **Parameters**: `array $data`


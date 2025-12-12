# InstrumentGatewayInterface.php

**Path**: `src\Gateway\Interface\PaymentMethod\InstrumentGatewayInterface.php`

## Summary
This interface defines the contract for payment gateway implementations that manage payment instruments (e.g., credit cards, bank accounts) for customers. It provides methods to update payment instrument details with payment data and potential URL redirections for verification, as well as format raw payment data into a standardized structure for storage, enabling different payment gateways to be integrated into the system through a common API.

## Function Details

### `updatePaymentInstrument`

- **Parameters**: `PaymentInstrument $paymentInstrument, array $paymentData = [], string $currentUrl = ''`
- **Description**: @throws InstrumentVerificationRequestRedirectionException
@throws PaymentInstrumentException
/

### `formatDataDetailsForPaymentInstrument`

- **Parameters**: `array $data`


# PaymentGatewayInterface.php

**Path**: `src\Gateway\Interface\PaymentMethod\PaymentGatewayInterface.php`

## Summary
This interface defines a contract for payment gateway integrations in a payment processing system. It requires implementing classes to provide a `getPaymentPublicConfig()` method that retrieves public-facing configuration data (likely for frontend payment forms) for either a stored payment instrument or an active payment transaction. The method can throw a `PaymentException` when configuration retrieval fails, enabling standardized error handling across different payment gateway implementations.

## Function Details

### `getPaymentPublicConfig`

- **Parameters**: `PaymentInstrument|Payment $object, array $data = []`
- **Description**: @throws PaymentException
/


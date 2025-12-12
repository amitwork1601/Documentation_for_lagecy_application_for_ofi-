# SubscriptionPaymentGatewayInterface.php

**Path**: `src\Gateway\Interface\PaymentMethod\SubscriptionPaymentGatewayInterface.php`

## Summary
This interface defines a contract for payment gateways that handle subscription-based payments. It extends the base `PaymentGatewayInterface` and adds a `debitPaymentInstrument()` method specifically designed to charge a saved payment method for recurring subscription orders, returning a `PaymentInterface` object representing the completed transaction or throwing a `PaymentException` on failure.

## Function Details

### `debitPaymentInstrument`

- **Parameters**: `SubscriptionOrder $subscriptionOrder, array $requestData = []`
- **Description**: @throws PaymentException
/


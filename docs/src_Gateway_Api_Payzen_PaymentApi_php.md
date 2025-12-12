# PaymentApi.php

**Path**: `src\Gateway\Api\Payzen\PaymentApi.php`

## Summary
The `PaymentApi` class serves as the main interface for integrating with the Payzen payment gateway, handling payment processing operations for e-commerce orders and subscriptions. It provides methods to tokenize payment instruments for secure storage (`requestAliasToken`), process order payments (`requestPayment`), and retrieve transaction details, while wrapping Payzen API calls with custom exception handling. This class acts as a domain-specific adapter that bridges Sylius e-commerce entities (Orders, PaymentInstruments) with Payzen's payment processing API.

## Classes
- `PaymentApi`

## Function Details

### `requestAliasToken`

- **Parameters**: `PaymentInstrument $paymentInstrument`
- **Description**: @throws PaymentException
/

### `requestPayment`

- **Parameters**: `Order $order`
- **Description**: @throws PaymentException
/

### `getTransactionsByOrder`

- **Parameters**: `Order $order`

### `getParams`

- **Parameters**: `SubscriptionOrder|Order|PaymentInstrument $object`

### `formatParams`

- **Parameters**: `SubscriptionOrder|Order|PaymentInstrument $object`

### `getOrderParams`

- **Parameters**: `SubscriptionOrder|Order $object`

### `formatCustomerParams`

- **Parameters**: `SubscriptionOrder|Order|PaymentInstrument $object`

### `formatShoppingCart`

- **Parameters**: `SubscriptionOrder|Order $object`


# Payment.php

**Path**: `src\Entity\Payment\Payment.php`

## Summary
The `Payment` entity extends Sylius's base payment model and represents payment transactions in an e-commerce system. It exposes payment data through GraphQL API with extensive filtering capabilities (by order details, customer info, payment state, amount ranges, and dates) and adds convenience methods to retrieve gateway configuration details. The entity is auditable and integrates with API Platform for querying payment records with custom collection providers for complex database queries.

## Classes
- `Payment`

## Function Details

### `getGatewayName`


### `getFactoryName`


### `isInEditableState`


### `getPaymentData`


### `getTransactionId`


### `getPaymentDate`



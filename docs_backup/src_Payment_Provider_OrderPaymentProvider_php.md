# OrderPaymentProvider.php

**Path**: `src\Payment\Provider\OrderPaymentProvider.php`

## Summary
The `OrderPaymentProvider` class is responsible for creating and configuring payment objects for orders in an e-commerce system, with special handling for subscription-based orders. It resolves the appropriate payment method (either from the order's last payment or from default resolvers), creates a payment instance with the correct amount and currency, and manages payment state transitions to reach a target state.

## Classes
- `OrderPaymentProvider`

## Function Details

### `provideOrderPayment`

- **Parameters**: `OrderInterface $order, string $targetState`
- **Description**: @throws NotProvidedOrderPaymentException
/

### `getLastPayment`

- **Parameters**: `OrderInterface $order`

### `getDefaultPaymentMethod`

- **Parameters**: `PaymentInterface $payment, OrderInterface $order`

### `applyRequiredTransition`

- **Parameters**: `PaymentInterface $payment, string $targetState`


# OrderPaymentProcessor.php

**Path**: `src\Order\Processor\OrderPaymentProcessor.php`

## Summary
The `OrderPaymentProcessor` class is responsible for managing payment entities associated with orders during order processing. It handles three main scenarios: skipping payment processing for orders in certain states, removing payments when an order total is zero or for subscription orders, and either updating existing payments or creating new payments to match the current order total and currency.

## Classes
- `OrderPaymentProcessor`

## Function Details

### `process`

- **Parameters**: `BaseOrderInterface $order`

### `canProvideOrderPayment`

- **Parameters**: `OrderInterface $order`

### `canPaymentsBeRemoved`

- **Parameters**: `OrderInterface $order`

### `removePayments`

- **Parameters**: `OrderInterface $order`

### `cannotBeProcessed`

- **Parameters**: `OrderInterface $order`


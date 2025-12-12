# OrderLockFactory.php

**Path**: `src\Component\Order\OrderLockFactory.php`

## Summary
This factory class creates distributed locks for Order entities to prevent concurrent modifications during order processing operations. It provides three methods to create locks: directly from an Order object, by order ID, or by order token value, with optional automatic lock acquisition. The locks use a consistent naming convention with a prefix to ensure order operations are thread-safe across the e-commerce application.

## Classes
- `OrderLockFactory`

## Function Details

### `create`

- **Parameters**: `baseOrderInterface|OrderInterface|Order $order, bool $autoAcquire = true`

### `createWithOrderId`

- **Parameters**: `int $orderId, bool $autoAcquire = true`

### `createWithOrderTokenValue`

- **Parameters**: `string $tokenValue, bool $autoAcquire = true`


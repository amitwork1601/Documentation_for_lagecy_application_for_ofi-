# OrderDataProvider.php

**Path**: `src\Order\Provider\OrderDataProvider.php`

## Summary
This class provides utility methods for calculating aggregate order data in an e-commerce system. It computes the total quantity and monetary totals of items in an order, with support for optional filtering callbacks and tax calculations (handling both tax-included and tax-excluded pricing scenarios). The class serves as a centralized data provider for order metrics needed across the application.

## Classes
- `OrderDataProvider`

## Function Details

### `getItemsQuantity`

- **Parameters**: `OrderInterface $order, ?callable $canProcessThisItemCallback = null, ...$callbackParams`

### `getItemsTotal`

- **Parameters**: `OrderInterface $order, ?callable $canProcessThisItemCallback = null, ...$callbackParams`

### `getItemsTotalWithoutTax`

- **Parameters**: `OrderInterface $order, ?callable $canProcessThisItemCallback = null, ...$callbackParams`

### `getTotalWithoutTax`

- **Parameters**: `OrderInterface $order`


# OrderUpdater.php

**Path**: `src\TalonOne\Updater\OrderUpdater.php`

## Summary
The `OrderUpdater` class updates customer business report metrics based on their order history in an e-commerce system integrated with TalonOne promotion management. It calculates and updates various customer statistics including first/last order dates, total order counts (overall and yearly), purchased products, historically used coupons, and total ordered item amounts by analyzing the customer's completed orders. This updater serves as part of a larger system for maintaining customer business intelligence data, likely used for marketing segmentation, loyalty programs, and promotional targeting.

## Classes
- `OrderUpdater`

## Function Details

### `update`

- **Parameters**: `CustomerBusinessReport $customerBusinessReport`

### `getSortedOrders`

- **Parameters**: `Customer $customer, bool $onlyCurrentYear = false`

### `resetCustomerBusinessReport`

- **Parameters**: `CustomerBusinessReport $customerBusinessReport`

### `getBoughtProducts`

- **Parameters**: `Customer $customer`

### `getHistoricUsedCoupons`

- **Parameters**: `iterable $orders`

